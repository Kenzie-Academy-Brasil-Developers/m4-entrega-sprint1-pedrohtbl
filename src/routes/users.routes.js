import { Router } from "express";
import { createUser, deleteUser, getUser, getUserProfile, updateUser } from "../controllers/users.controllers";
import createUserSchema from "../database/schemas/createUser.schema";
import authorization from "../middleware/authorization.middleware";
import isAdmAuth from "../middleware/isAdmAuth.middleware";
import schemaValidation from "../middleware/schemaValidation.middleware";
import verifyUserExists from "../middleware/verifyUserExists.middleware";
import verifyOwner from "../middleware/verifyOwner.service";

const usersRouter = Router()

usersRouter.post('', schemaValidation(createUserSchema), createUser )
usersRouter.get('', authorization, getUser)
usersRouter.get('/profile', authorization, getUserProfile)
usersRouter.patch('/:uuid', authorization,verifyUserExists, verifyOwner, updateUser)
usersRouter.delete('/:uuid',authorization,verifyUserExists, verifyOwner, deleteUser)

export default usersRouter