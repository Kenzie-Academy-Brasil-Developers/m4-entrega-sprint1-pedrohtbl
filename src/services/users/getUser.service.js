import users from "../../database/users"

const getUserService = (id) =>{
    const user = users.find(element => element.uuid === id)

    if(!user || !user.isAdm){
        throw new Error("Unauthorized")
    }
    return users
}

export default getUserService