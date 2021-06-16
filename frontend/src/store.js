import { createStore, compose } from "redux"
import { combineReducers } from "redux"
import { applyMiddleware } from "redux"
import thunk from "redux-thunk"

import { productListReducer, productDetailsReducer, productCreateReducer } from "reducers/product.reducer.js"
import { cartReducer } from "reducers/cart.reducer"
import { userSigninReducer, userRegisterReducer, userUpdateReducer } from "reducers/user.reducer"
import { orderCreateReducer, orderDetailsReducer, orderPayReducer, mineOrdersReducer, removeOrderReducer } from "reducers/order.reducer"

const initialState = {
  cart: {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
    shippingAddress: JSON.parse(localStorage.getItem("shippingAddress")) || {}
  },
  userSignin: {
    userInfo: JSON.parse(localStorage.getItem("userInfo") || null)
  },
}

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productCreate: productCreateReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  userUpdate: userUpdateReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  mineOrders: mineOrdersReducer,
  removeOrder: removeOrderReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
)

export default store