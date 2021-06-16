import { ORDER_MINE_LIST_UPDATE, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_CREATE_FAIL, ORDER_CREATE_RESET, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_DETAILS_FAIL, ORDER_PAY_REQUEST, ORDER_PAY_SUCCESS, ORDER_PAY_FAIL, ORDER_PAY_RESET, ORDER_MINE_LIST_REQUEST, ORDER_MINE_LIST_SUCCESS, ORDER_MINE_LIST_FAIL, ORDER_MINE_LIST_RESET, ORDER_REMOVE_FAIL, ORDER_REMOVE_SUCCESS, ORDER_REMOVE_REQUEST } from "constant/order.constant";

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return { loading: true }
    case ORDER_CREATE_SUCCESS:
      return { loading: false, order: action.payload }
    case ORDER_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case ORDER_CREATE_RESET:
      return {}
    default:
      return state;
  }
}

export const orderDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return { loading: true }
    case ORDER_DETAILS_SUCCESS:
      return { loading: false, orderInfo: action.payload }
    case ORDER_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const orderPayReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_PAY_REQUEST:
      return { loading: true }
    case ORDER_PAY_SUCCESS:
      return { loading: false, success: true }
    case ORDER_PAY_FAIL:
      return { loading: false, error: action.payload }
    case ORDER_PAY_RESET:
      return {}
    default:
      return state
  }
}

export const mineOrdersReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case ORDER_MINE_LIST_REQUEST:
      return { loading: true }
    case ORDER_MINE_LIST_SUCCESS:
      return { loading: false, listOrder: action.payload }
    case ORDER_MINE_LIST_FAIL:
      return { loading: false, error: action.payload }
    case ORDER_MINE_LIST_UPDATE:
      return { listOrder: action.payload }
    case ORDER_MINE_LIST_RESET:
      return {}
    default:
      return state
  }
}

export const removeOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_REMOVE_REQUEST:
      return { loading: true }
    case ORDER_REMOVE_SUCCESS:
      return { loading: false, success: true }
    case ORDER_REMOVE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
