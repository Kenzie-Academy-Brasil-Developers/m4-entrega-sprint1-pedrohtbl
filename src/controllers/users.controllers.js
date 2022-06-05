import createUserService from "../services/users/createUser.service"
import deleteUserService from "../services/users/deleteUser.service"
import getUserService from "../services/users/getUser.service"
import getUserProfileService from "../services/users/getUserProfile.service"
import updateUserService from "../services/users/updateUser.service"

export const createUser = async (req, res) =>{
    try {
        const data = req.body
        const createdUser = await createUserService(data)
    
        return res.status(201).json(createdUser)   
           
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

export const getUser = (req,res) =>{
    try {
        const users = getUserService(req.user.uuid)
    
        return res.status(200).json(users)     
    } catch (error) {
        return res.status(401).json({
            message: error.message
        })
    }
}

export const getUserProfile = (req, res) =>{
    const userId = req.user.uuid
    const user = getUserProfileService(userId)

    return res.status(200).json(user)
}

export const updateUser = (req, res) =>{
    try {
        const userIndex = req.userIndex
        const data = req.body
        const newUser = updateUserService(data, userIndex)
    
        return res.status(200).json(newUser)
    } catch (error) {
       return res.status(401).json({
           message: error.message
       }) 
    }   
}

export const deleteUser = (req, res) =>{
    const deletedUser = deleteUserService(req.userIndex)

    return res.status(200).json(deletedUser)
}