import jwt from "jsonwebtoken"

const authorization = (req,res,next) =>{
    let token = req.headers.authorization

    if(!token){
        return res.status(401).json({
            message: "Missing authorization headers"
        })
    }

    token = token.split(" ")[1]

    jwt.verify(token, "dO*UJ@!U*E!(*D1s", (error, decoded)=>{
        if(error){
            return res.status(401).json({
                message: "Invalid token"
            })
        }

        req.user = {
            uuid: decoded.sub,
            token: token
        }

        next()
    })

}

export default authorization