import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import "./styles.scss"
import CheckoutSteps from 'components/CheckoutSteps';
import { createOrder } from 'actions/order.action';
import { ORDER_CREATE_RESET } from 'constant/order.constant';
import LoadingBox from 'components/LoadingBox';
import MessageBox from 'components/MessageBox';
import { url } from 'api';

function PlaceOrderScreen(props) {
  const cart = useSelector(state => state.cart)
  if (!cart.paymentMethod) {
    props.history.push("/payment")
  }
  const orderCreate = useSelector(state => state.orderCreate)
  const { order, loading, error } = orderCreate

  const dispatch = useDispatch()

  cart.toPrice = num => Number(num.toFixed(2))
  cart.itemsPrice = cart.toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  )
  cart.shippingPrice = cart.itemsPrice > 100 ? cart.toPrice(0) : cart.toPrice(10)
  cart.taxPrice = cart.toPrice(0.15 * cart.itemsPrice)
  cart.totalPrice = cart.toPrice(cart.itemsPrice + cart.shippingPrice + cart.taxPrice)

  const handlePlaceOrder = () => {
    dispatch(createOrder({ ...cart, orderItems: cart.cartItems }))
  }

  useEffect(() => {
    if (order) {
      props.history.push(`/order/${order._id}`)
      dispatch({ type: ORDER_CREATE_RESET })
    }
  }, [dispatch, order, props.history])

  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <div className="placeOrder-screen">
        <div className="placeOrder-screen__left">
          <div>
            <h2>Shipping</h2>
            <p>
              <strong>Name:</strong> {cart.shippingAddress.fullname} <br />
              <strong>Address:</strong> {cart.shippingAddress.address}, {" "}
              {cart.shippingAddress.city}, {" "} {cart.shippingAddress.postalCode}, {" "}
              {cart.shippingAddress.country}
            </p>
          </div>

          <div>
            <h2>Payment</h2>
            <p>
              <strong>Method:</strong> {cart.paymentMethod}
            </p>
          </div>

          <div>
            <h2>Order Items</h2>
            <ul>
              {cart.cartItems.map(item => (
                <div key={item.product}>
                  <li>
                    <div className="image"> <img src={url + item.image} alt={item.name} /> </div>
                    <div className="info"> <h2>{item.name}</h2> </div>
                    <div className="price"> <h2>{item.qty} x ${item.price} = ${item.qty * item.price}</h2> </div>
                  </li>
                  <div />
                </div>
              ))}
            </ul>
          </div>
        </div>

        <div className="placeOrder-screen__right">
          <div>
            <h2>Order Summary</h2>
            <div>
              <p>Items</p>
              <p>${cart.itemsPrice}</p>
            </div>
            <div>
              <p>Shipping</p>
              <p>${cart.shippingPrice}</p>
            </div>
            <div>
              <p>Tax</p>
              <p>${cart.taxPrice}</p>
            </div>
            <div>
              <p><strong>Order Total</strong></p>
              <p><strong>${cart.totalPrice}</strong></p>
            </div>

            {loading && <LoadingBox />}
            {error && <MessageBox variant="danger">{error}</MessageBox>}

            <button
              className="primary"
              disabled={cart.cartItems.length === 0}
              onClick={handlePlaceOrder}
            >Place Order</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlaceOrderScreen;