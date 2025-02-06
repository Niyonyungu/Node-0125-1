import express from "express"
import user from "../controllers/userController.js";
import isAuthorized from "../middlewares/auth.js";
import roleMiddleware from "../middlewares/authRole.js";

const userRouter = express.Router()

userRouter.post("/createUser", isAuthorized , roleMiddleware(["admin"]), user.createUser);
userRouter.get("/getAllUsers", isAuthorized, roleMiddleware(["admin"]), user.getUsers);
userRouter.get("/getUserDetails/:id", isAuthorized, roleMiddleware(["admin"]), user.getUserDetails);
userRouter.delete("/deleteUser/:id", isAuthorized, roleMiddleware(["admin"]), user.deleteUser);
userRouter.delete("/deleteAllUsers", isAuthorized, roleMiddleware(["admin"]), user.deleteAllUsers);
userRouter.patch("/updateUser/:id", isAuthorized, roleMiddleware(["admin"]), user.updateUser);

export default userRouter;

