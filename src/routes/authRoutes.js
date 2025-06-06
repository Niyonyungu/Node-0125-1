import express from "express"
import auth from "../controllers/authController";
import { bodyValidation } from "../middlewares/bodyValidation";
import { loginSchema } from "../validation/authValidation";
import { newUserSchema } from "../validation/userValidation";
import uploadProfile from "../middlewares/multerUpload";

const authRouter = express.Router()

authRouter.post("/SignUp", uploadProfile, bodyValidation(newUserSchema), auth.createUser)
authRouter.post("/login", bodyValidation(loginSchema), auth.userLogin)

export default authRouter;