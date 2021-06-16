import { ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_CREATE_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_DETAILS_FAIL, ORDER_PAY_REQUEST, ORDER_PAY_SUCCESS, ORDER_PAY_FAIL, ORDER_MINE_LIST_REQUEST, ORDER_MINE_LIST_SUCCESS, ORDER_MINE_LIST_FAIL, ORDER_REMOVE_REQUEST, ORDER_REMOVE_SUCCESS, ORDER_REMOVE_FAIL, ORDER_MINE_LIST_UPDATE } from "constant/order.constant"
import * as api from "api"
import { CART_EMPTY } from "constant/cart.constant"

export const createOrder = (order) => async (dispatch) => {
  dispatch({ type: ORDER_CREATE_REQUEST })

  try {
    const { data } = await api.createOrder(order)

    dispatch({ type: ORDER_CREATE_SUCCESS, payload: data })
    dispatch({ type: CART_EMPTY })
    localStorage.removeItem("cartItems")
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    })
  }
}

export const getDetailsOrder = (orderId) => async (dispatch) => {
  dispatch({ type: ORDER_DETAILS_REQUEST })

  try {
    const { data } = await api.fetchDetailsOrder(orderId)

    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.response
    })
  }
}

export const payOrder = (order, paymentResult) => async (dispatch) => {
  dispatch({ type: ORDER_PAY_REQUEST })

  try {
    await api.paymentResultOrder(order, paymentResult)

    dispatch({ type: ORDER_PAY_SUCCESS })
  } catch (error) {
    dispatch({
      type: ORDER_PAY_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.response
    })
  }
}

export const getListOrder = () => async (dispatch) => {
  dispatch({ type: ORDER_MINE_LIST_REQUEST })

  try {
    const { data } = await api.fetchMineOrders()

    dispatch({ type: ORDER_MINE_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: ORDER_MINE_LIST_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.response
    })
  }
}

export const removeOrder = (orderId) => async (dispatch) => {
  dispatch({ type: ORDER_REMOVE_REQUEST })

  try {
    const { data } = await api.removeOrder(orderId)

    dispatch({ type: ORDER_REMOVE_SUCCESS })
    dispatch({ type: ORDER_MINE_LIST_UPDATE, payload: data })
  } catch (error) {
    dispatch({
      type: ORDER_REMOVE_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.response
    })
  }
}

