import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { addToCart, removeCart } from 'actions/cart.action';
import "./styles.scss"
import { url } from 'api';

function CartScreen(props) {
  const cart = useSelector(state => state.cart)
  const { cartItems } = cart
  const dispatch = useDispatch()

  const handleRemoveCart = (productId) => {
    dispatch(removeCart(productId))
  }

  const handleCheckout = () => {
    props.history.push("/shipping")
  }

  return (
    <div className="cart-background">
      <div className="cart-screen">
        <div className="cart-screen__item">
          <div> <h1>Shopping Cart</h1> </div>
          {cartItems.length > 0 ? (
            <>
              <div className="price-title"> <p>Price</p> </div>
              {cartItems.map(cart => (
                <div key={cart.product} className="cart-screen__item--info">
                  <div className="image"> <img src={url + cart.image} alt={cart.name} /> </div>
                  <div className="info">
                    <h2>{cart.name}</h2>
                    <div>
                      <select className="select-qty" value={cart.qty} onChange={e => dispatch(addToCart(cart.product, Number(e.target.value)))}>
                        {[...Array(cart.countInStock).keys()].map(
                          x => (
                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                          )
                        )}
                      </select>
                      <div />
                      <i onClick={() => handleRemoveCart(cart.product)} className="fas fa-trash-alt"></i>
                    </div>
                  </div>
                  <div className="price"> <h2>${cart.price}</h2> </div>
                </div>
              ))}
            </>
          ) : (
              <div>Your cart is empty, go <Link to="/">Shopping</Link></div>
            )}
        </div>
        <div className="cart-screen__order">
          <ul>
            <li>
              <h3>
                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : $
              {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
              </h3>
            </li>

            <li>
              <button
                disabled={cartItems.length === 0}
                className="primary"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CartScreen;