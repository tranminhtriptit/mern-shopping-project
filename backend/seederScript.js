import dotenv from "dotenv"
dotenv.config()
import connectDB from "./config/db.js"
connectDB()

import Product from "./models/product.model.js"
import Order from "./models/order.model.js"
import User from "./models/user.model.js"
import data from "./data.js"

const importData = async () => {
  try {
    await Product.deleteMany({})
    await Order.deleteMany({})
    await User.deleteMany({})

    const { products, users } = data

    await Product.insertMany(products)
    await User.insertMany(users)

    console.log("Data imported!")
    process.exit()
  } catch (error) {
    console.log("Data failed import!")
    process.exit(1)
  }
}

importData()