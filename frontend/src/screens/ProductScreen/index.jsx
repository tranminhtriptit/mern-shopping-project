import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import "./styles.scss"
import Rating from 'components/Rating';
import { getDetailsProduct } from 'actions/product.action';
import MessageBox from 'components/MessageBox';
import LoadingBox from 'components/LoadingBox';
import { addToCart } from 'actions/cart.action';
import { url } from 'api';

function ProductScreen(props) {
  const productId = props.match.params.id
  const productDetails = useSelector(state => state.productDetails)
  const { product, loading, error } = productDetails

  const dispatch = useDispatch()
  const [qty, setQty] = useState(1)

  const handleAddToCart = () => {
    dispatch(addToCart(productId, Number(qty)))
    props.history.push("/")
  }

  useEffect(() => {
    dispatch(getDetailsProduct(productId))
  }, [dispatch, productId])

  return (
    <>
      {loading ? <LoadingBox /> : error ? <MessageBox variant="danger">{error}</MessageBox> :
        <div className="productscreen">
          <div className="productscreen__image">
            <img src={url + product.image} alt={product.name} />
          </div>

          <div className="productscreen__info">
            <div className="productscreen__info--description">
              <ul>
                <li> <h2>{product.name}</h2> </li>
                <li> <Rating rating={product.rating} numReviews={product.numReviews} /> </li>
                <li>Brand: {product.brand}</li>
                <li>Price: ${product.price}</li>
                <li className="description"> <strong>About this item</strong>
                  <textarea disabled defaultValue={product.description} />
                </li>
              </ul>
            </div>

            <div className="productscreen__info--order">
              <ul>
                <li className="row">
                  <div>Price</div>
                  <div className="price">${product.price}</div>
                </li>

                <li className="row">
                  <div>Status</div>
                  {product.countInStock > 0 ? (
                    <span className="success">In Stock</span>
                  ) : (
                      <span className="danger">Unavailable</span>
                    )}
                </li>
                {
                  product.countInStock > 0 && (
                    <>
                      <li>
                        <div>Qty</div>
                        <div>
                          <select className="select-qty" value={qty} onChange={e => setQty(e.target.value)}>
                            {[...Array(product.countInStock).keys()].map(
                              x => (
                                <option key={x + 1} value={x + 1}>{x + 1}</option>
                              )
                            )}
                          </select>
                        </div>
                      </li>
                      <li>
                        <button className="button primary" onClick={handleAddToCart}>Add to Cart</button>
                      </li>
                    </>
                  )
                }
              </ul>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default ProductScreen;