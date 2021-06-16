import expressAsyncHandler from "express-async-handler"
import Product from "../models/product.model.js"

export const getProduct = expressAsyncHandler(async (req, res) => {
  const { page, limit, search } = req.query
  const allProducts = await Product.find({})

  let products
  if (search) {
    products = allProducts.filter(product => product.name.toLowerCase().search(search.toLowerCase()) !== -1)
  } else {
    products = allProducts
  }

  res.send({
    products: products.slice(limit * (page - 1), limit * page),
    search: search,
    page: Number(page),
    limit: Number(limit),
    totalRows: products.length
  })
})

export const getDetailsProduct = expressAsyncHandler(async (req, res) => {
  const productId = req.params.id
  const product = await Product.findById(productId)

  res.send(product)
})

export const createProduct = expressAsyncHandler(async (req, res) => {
  const existedProduct = await Product.find({ name: req.body.name })
  if (!existedProduct) {
    console.log(existedProduct);
    res.status(401).send({ message: "This name of product was exist" })
    return
  }

  const product = new Product({
    name: req.body.name,
    brand: req.body.brand,
    category: req.body.category,
    description: req.body.description,
    price: req.body.price,
    countInStock: req.body.countInStock,
    image: req.file.path,
    rating: 0,
    numReviews: 0
  })
  const createdProduct = await product.save()

  res.send(createdProduct)
})
