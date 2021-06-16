import { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNOUT, USER_REGISTER_FAIL, USER_REGISTER_THROW_ERROR, USER_REGISTER_SIGNOUT, USER_UPDATE_PROFILE_REQUEST, USER_UPDATE_PROFILE_FAIL, USER_UPDATE_PROFILE_SUCCESS } from "constant/user.constant"
import * as api from "api"
import { CART_EMPTY } from "constant/cart.constant"
import { ORDER_CREATE_RESET } from "constant/order.constant"

export const register = (name, password, email) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST })

  try {
    const { data } = await api.createUser(name, password, email)

    dispatch({ type: USER_REGISTER_SUCCESS, payload: data })
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    })
  }
}

export const registerThrowError = (error) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_THROW_ERROR, payload: error })
}

export const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST })

  try {
    const { data } = await api.signIn(email, password)

    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data })

    localStorage.setItem("userInfo", JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    })
  }
}

export const signout = () => async (dispatch) => {
  dispatch({ type: USER_SIGNOUT })
  dispatch({ type: CART_EMPTY })
  dispatch({ type: USER_REGISTER_SIGNOUT })
  dispatch({ type: ORDER_CREATE_RESET })
  localStorage.removeItem("userInfo")
  localStorage.removeItem("cartItems")
  localStorage.removeItem("shippingAddress")
}

export const updateDetailsUser = (user) => async (dispatch) => {
  dispatch({ type: USER_UPDATE_PROFILE_REQUEST })

  try {
    const { data } = await api.updateDetailsUser(user)

    dispatch({ type: USER_UPDATE_PROFILE_SUCCESS })
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data })
    localStorage.setItem("userInfo", JSON.stringify(data))

  } catch (error) {
    dispatch({
      type: USER_UPDATE_PROFILE_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    })
  }
}