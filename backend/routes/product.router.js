import express from "express"
import { getProduct, getDetailsProduct, createProduct } from "../controller/product.controller.js"

import multer from "multer"
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/")
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString().substring(0, 10) + file.originalname)
  }
})
const upload = multer({ storage })

const productRouter = express.Router()

productRouter.get("/", getProduct)

productRouter.get("/:id", getDetailsProduct)

productRouter.post("/", upload.single("productImage"), createProduct)

export default productRouter