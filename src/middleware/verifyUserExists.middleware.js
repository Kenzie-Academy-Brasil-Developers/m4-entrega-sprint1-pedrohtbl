import users from "../database/users"

const verifyUserExists = (req, res,next) =>{
    const userId = req.params.uuid
    const userIndex = users.findIndex(element => element.uuid === userId)

    if(userIndex === -1){
        return res.status(400).json({
            message: "User not found"
        })
    }

    req.userIndex = userIndex

    next()
}

export default verifyUserExists