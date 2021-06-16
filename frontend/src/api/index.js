import axios from "axios"

export const url = "https://mern-shopping-project.herokuapp.com/api/"
const API = axios.create({ baseURL: url })

API.interceptors.request.use(req => {
  if (localStorage.getItem("userInfo")) {
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem("userInfo")).token}`
  }
  return req
})

export const fetchProducts = (page, limit, search) => API.get(`/products?page=${page}&limit=${limit}&search=${search}`)
export const fetchDetailsProduct = (productId) => API.get(`/products/${productId}`)
export const reqCreateProduct = (product) => API.post("/products", product, {
  headers: { 'content-type': 'multipart/form-data' }
})

export const createUser = (name, password, email) => API.post(`/user/register`, { name, password, email })
export const signIn = (email, password) => API.post(`/user/signin`, { email, password })
export const updateDetailsUser = (user) => API.put(`/user/profile`, user)

export const createOrder = (order) => API.post(`/order`, order)
export const fetchDetailsOrder = (orderId) => API.get(`/order/${orderId}`)
export const fetchMineOrders = () => API.get("/order/mine")
export const paymentResultOrder = (order, paymentResult) => API.put(`/order/${order._id}/pay`, paymentResult)
export const removeOrder = (orderId) => API.delete(`/order/${orderId}`)

export const fetchPaypalClientId = () => API.get("/config/paypal")
