import express from "express"
import createUser from "../modules/userModule.js"

const userRouter = express.Router()
userRouter.post("/createUser", createUser);

export default userRouter;