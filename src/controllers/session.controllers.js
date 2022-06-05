import loginUserService from "../services/sessions/loginUser.service"

export const login = (req, res) =>{
    try {
        const user = req.body
        const loggedUser = loginUserService(user)
    
        return res.status(200).json(loggedUser)
    } catch (error) {
        return res.status(401).json({
            message: error.message
        })
    }
}