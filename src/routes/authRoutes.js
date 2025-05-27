import express from "express"
import auth from "../controllers/authController";
import { bodyValidation } from "../middlewares/bodyValidation";
import { loginSchema } from "../validation/authValidation";
import { newUserSchema } from "../validation/userValidation";

const authRouter = express.Router()

authRouter.post("/SignUp", bodyValidation(newUserSchema), auth.createUser)
authRouter.post("/login", bodyValidation(loginSchema) , auth.userLogin)

export default authRouter;