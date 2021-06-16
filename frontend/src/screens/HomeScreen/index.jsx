import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import "./styles.scss"
import CartItem from 'components/CartItem';
import { getProducts } from 'actions/product.action';
import LoadingBox from 'components/LoadingBox';
import MessageBox from 'components/MessageBox';
import Pagination from 'components/Pagination';
import { PRODUCT_LIST_SET_FILTER } from 'constant/product.constant';

function HomeScreen(props) {
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const { data, loading, error, filters } = productList

  useEffect(() => {
    dispatch(getProducts(filters))
  }, [dispatch, filters])

  const handlePageChange = (newPage) => {
    dispatch({
      type: PRODUCT_LIST_SET_FILTER,
      payload: { ...filters, page: newPage }
    })
  }

  return (
    <div className="homescreen">
      <div className="homescreen__left">

      </div>

      <div className="homescreen__right">
        <h1>Lastest Product</h1>
        <div className="cart-container">
          {loading ? <LoadingBox /> :
            error ? <MessageBox variant="danger"> {error} </MessageBox> :
              data.products.map(product => (
                <CartItem product={product} key={product._id} />
              ))}
          {!loading && !error && <Pagination
            pagination={data}
            onPageChange={handlePageChange}
          />}
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;