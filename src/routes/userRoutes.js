import express from "express"
import user from "../controllers/userController";
import isAuthorized from "../middlewares/auth";
import roleMiddleware from "../middlewares/authRole";

const userRouter = express.Router()

userRouter.get("/users", isAuthorized, roleMiddleware(["admin", "manager"]), user.getUsers);
userRouter.get("/userDetails/:id", isAuthorized, roleMiddleware(["admin"]), user.getUserDetails);
userRouter.delete("/deleteUser/:id", isAuthorized, roleMiddleware(["admin"]), user.deleteUser);
userRouter.delete("/deleteAllUsers", isAuthorized, roleMiddleware(["admin"]), user.deleteAllUsers);
userRouter.patch("/updateUser/:id", isAuthorized, roleMiddleware(["admin", "manager" ]), user.updateUser);

export default userRouter;

