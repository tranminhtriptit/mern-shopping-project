import express from "express"
import { signin, seedUser, register, userUpdate } from "../controller/user.controller.js"
import { isAuth } from "../middleware/auth.middleware.js"

const userRouter = express.Router()

userRouter.get("/seed", seedUser)
userRouter.post("/signin", signin)
userRouter.post("/register", register)
userRouter.put("/profile", isAuth, userUpdate)

export default userRouter