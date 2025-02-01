import express from "express"
import userModule from "../modules/userModule.js";

const userRouter = express.Router()

userRouter.post("/createUser", userModule.createUser);
userRouter.get("/getAllUsers", userModule.getUsers);
userRouter.get("/getUserDetails/:id", userModule.getUserDetails);
userRouter.delete("/deleteUser/:id", userModule.deleteUser);
userRouter.patch("/updateUser/:id", userModule.updateUser);
userRouter.post("/login", userModule.userLogin);

export default userRouter;