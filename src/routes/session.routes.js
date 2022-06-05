import { Router } from "express";
import { login } from "../controllers/session.controllers";
import loginSchema from "../database/schemas/loginUser.schema";
import schemaValidation from "../middleware/schemaValidation.middleware";

const sessionRouter = Router()

sessionRouter.post('', schemaValidation(loginSchema), login)

export default sessionRouter