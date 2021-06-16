import expressAsyncHandler from "express-async-handler";
import Order from "../models/order.model.js";

export const createOrder = expressAsyncHandler(async (req, res) => {
  const data = req.body

  if (data.orderItems.length === 0) {
    req.status(400).send({ messages: "Cart is empty" })
  } else {
    const order = new Order({
      orderItems: data.orderItems,
      shippingAddress: data.shippingAddress,
      paymentMethod: data.paymentMethod,
      itemsPrice: data.itemsPrice,
      shippingPrice: data.shippingPrice,
      taxPrice: data.taxPrice,
      totalPrice: data.totalPrice,
      user: req.user._id,
    })
    const createdOrder = await order.save()

    res.status(201).send(createdOrder)
  }
})

export const getOrder = expressAsyncHandler(async (req, res) => {
  const orderId = req.params.id
  const order = await Order.findById(orderId)

  if (order) {
    res.send(order)
  } else {
    res.status(404).send({ message: "Order not found" })
  }
})

export const payOrder = expressAsyncHandler(async (req, res) => {
  const { id, status, update_time, email_address } = req.body

  const order = await Order.findById(req.params.id)

  if (order) {
    order.isPaid = true
    order.paidAt = Date.now()
    order.paymentResult = {
      id, status, update_time, email_address
    }
    await order.save()

    res.send({ message: "Order Paid" })
  } else {
    res.status(404).send({ message: "Order not found" })
  }
})

export const getListOrder = expressAsyncHandler(async (req, res) => {
  const order = await Order.find({ user: req.user._id })

  if (order) {
    res.status(201).send(order)
  } else {
    res.status(404).send({ message: "Order not found" })
  }
})

export const removeOrder = expressAsyncHandler(async (req, res) => {
  const orderId = req.params.id
  const result = await Order.findByIdAndDelete(orderId)

  if (result) {
    const orders = await Order.find({})
    res.send(orders)
  } else {
    res.status(404).send({ message: "Order not found" })
  }
})
