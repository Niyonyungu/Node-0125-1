import express from "express"
import auth  from "../controllers/authController";
 
const authRouter = express.Router()


authRouter.post("/SignUp", auth.createUser)
authRouter.post("/login", auth.userLogin)

export default  authRouter;