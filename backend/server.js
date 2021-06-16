import dotenv from "dotenv"
dotenv.config()

import express from "express"
const app = express()

import connectDB from "./config/db.js"
connectDB()

import productRouter from "./routes/product.router.js"
import userRouter from "./routes/user.router.js"
import orderRouter from "./routes/order.router.js"

import cors from "cors"
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.send("Server is ready")
})

app.use("/api/uploads", express.static("uploads"))
app.use("/api/products", productRouter)
app.use("/api/user", userRouter)
app.use("/api/order", orderRouter)
app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sb")
})

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message })
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log("Server listen at port " + port)
})