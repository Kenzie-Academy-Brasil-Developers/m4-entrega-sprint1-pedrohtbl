import users from "../../database/users"

const getUserProfileService = (userId) =>{
    const user = users.find(element => element.uuid === userId)
    const {email, name, uuid, createdOn, updatedOn, isAdm} = user

   return {email, name, uuid, createdOn, updatedOn, isAdm}
}

export default getUserProfileService