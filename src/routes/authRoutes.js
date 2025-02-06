import express from "express"
import { userLogin } from "../controllers/authController";
 
const authRouter = express.Router()

authRouter.post("/login", userLogin)

export default  authRouter;