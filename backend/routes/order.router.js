import express from "express"
import { isAuth } from "../middleware/auth.middleware.js"
import { createOrder, getListOrder, getOrder, payOrder, removeOrder } from "../controller/order.controller.js"

const orderRouter = express.Router()

orderRouter.post("/", isAuth, createOrder)

orderRouter.get("/mine", isAuth, getListOrder)

orderRouter.get("/:id", isAuth, getOrder)

orderRouter.put("/:id/pay", isAuth, payOrder)

orderRouter.delete("/:id", isAuth, removeOrder)


export default orderRouter