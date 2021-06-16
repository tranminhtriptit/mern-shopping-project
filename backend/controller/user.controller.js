import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs"

import User from "../models/user.model.js";
import data from "../data.js"
import { generateToken } from "../utils.js"

export const seedUser = expressAsyncHandler(async (req, res) => {
  const createUsers = await User.insertMany(data.users)

  res.send({ createUsers })
})

export const signin = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email: email })

  if (user) {
    if (bcrypt.compareSync(password, user.password)) {
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user)
      })
      return
    }
  }

  res.status(401).send({ message: "Invalid email or password" })
})

export const register = expressAsyncHandler(async (req, res) => {
  const { email, name, password } = req.body

  const existedUser = await User.findOne({ email: email })

  if (existedUser) {
    res.status(401).send({ message: "Email already existed" })
    return
  }

  const user = new User({
    name,
    email,
    password: bcrypt.hashSync(password),
    isAdmin: false
  })
  const createdUser = await user.save()

  res.send({
    _id: createdUser._id,
    name: createdUser.name,
    email: createdUser.email,
    isAdmin: createdUser.isAdmin,
    token: generateToken(createdUser)
  })
})

export const userUpdate = expressAsyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    if (!bcrypt.compareSync(req.body.confirmPassword, user.password)) {
      res.status(401).send({ message: "Wrong password" })
      return
    }

    user.name = req.body.name || user.name
    if (req.body.password !== "********") {
      user.password = bcrypt.hashSync(req.body.password)
    }
    const updatedUser = await user.save()

    res.send({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser)
    })
  }
})

