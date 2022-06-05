import users from "../../database/users"
import * as bcrypt from  "bcryptjs"
import jwt from "jsonwebtoken"

const loginUserService = (data) =>{
    const user = users.find(element => data.email === element.email)
    
    if(!user){
        throw new Error("Wrong email/password")
    }

    const passwordMatch = bcrypt.compareSync(data.password, user.password)

    if(!passwordMatch){
        throw new Error("Wrong email/password")
    }

    const token = jwt.sign(user,"dO*UJ@!U*E!(*D1s", {expiresIn: "24h", subject: user.uuid})

    return {token}
}

export default loginUserService