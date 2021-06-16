import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import "./styles.scss"
import CheckoutSteps from 'components/CheckoutSteps';
import { savePaymentMethod } from 'actions/cart.action';

function PaymentMethodScreen(props) {
  const cart = useSelector(state => state.cart)
  const { shippingAddress } = cart
  if (!shippingAddress.fullname) {
    props.history.push("/shipping")
  }

  const dispatch = useDispatch()
  const [paymentMethod, setPaymentMethod] = useState("Paypal")

  const handleFormSubmit = (e) => {
    e.preventDefault()

    dispatch(savePaymentMethod(paymentMethod))
    props.history.push("/placeorder")
  }

  return (
    <div className="paymentMethod-screen">
      <CheckoutSteps step1 step2 step3 />
      <form onSubmit={handleFormSubmit} >
        <div>
          <h1>Payment Method</h1>
        </div>

        <div>
          <div>
            <input
              type="radio"
              id="paypal"
              value="PayPal"
              name="paymentMethod"
              required
              checked
              onChange={e => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="paypal">PayPal</label>
          </div>
        </div>

        <div>
          <div>
            <input
              type="radio"
              id="stripe"
              value="Stripe"
              name="paymentMethod"
              required
              onChange={e => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="stripe">Stripe</label>
          </div>
        </div>

        <div>
          <button className="primary" type="submit">Continue</button>
        </div>
      </form>
    </div>
  );
}

export default PaymentMethodScreen;