import users from "../../database/users"

const deleteUserService = (userIndex) =>{
    users.splice(userIndex,1)

    return {message: "User deleted with success"}
}

export default deleteUserService