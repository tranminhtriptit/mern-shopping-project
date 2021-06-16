const { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_CREATE_REQUEST, PRODUCT_CREATE_SUCCESS, PRODUCT_CREATE_FAIL, PRODUCT_LIST_SET_FILTER, PRODUCT_LIST_RESET_FILTER } = require("constant/product.constant");

const initialProductList = {
  filters: {
    limit: 12,
    page: 1,
    search: ""
  },
  data: [],
  loading: true
}
export const productListReducer = (state = initialProductList, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state, loading: true }
    case PRODUCT_LIST_SUCCESS:
      return { ...state, loading: false, data: action.payload }
    case PRODUCT_LIST_FAIL:
      return { ...state, loading: false, error: action.payload }
    case PRODUCT_LIST_SET_FILTER:
      return { ...state, filters: action.payload }
    case PRODUCT_LIST_RESET_FILTER:
      return { ...state, filters: initialProductList.filters }
    default:
      return state
  }
}

export const productDetailsReducer = (state = { productDetails: {}, loading: true }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true }
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload }
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return { loading: true }
    case PRODUCT_CREATE_SUCCESS:
      return { loading: false, success: true, createdProduct: action.payload }
    case PRODUCT_CREATE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

