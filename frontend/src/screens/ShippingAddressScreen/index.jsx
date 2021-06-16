import React from 'react'

import "./styles.scss"
import { useSelector, useDispatch } from 'react-redux';
import CheckoutSteps from 'components/CheckoutSteps';
import { useState } from 'react';
import { saveShippingAddress } from 'actions/cart.action';

function ShippingAddressScreen(props) {
  const userSignin = useSelector(state => state.userSignin)
  const { userInfo } = userSignin
  if (!userInfo) {
    props.history.push("/signin")
  }

  const cart = useSelector(state => state.cart)
  const { shippingAddress } = cart
  const [fullname, setFullName] = useState(shippingAddress.fullname || "")
  const [address, setAddress] = useState(shippingAddress.address || "")
  const [city, setCity] = useState(shippingAddress.city || "")
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode || "")
  const [country, setCountry] = useState(shippingAddress.country || "")

  const dispatch = useDispatch()

  const handleFormSubmit = (e) => {
    e.preventDefault()

    dispatch(saveShippingAddress({ fullname, address, city, postalCode, country }))
    props.history.push("/payment")
  }

  return (
    <div className="shipping-screen">
      <CheckoutSteps step1 step2 />
      <form onSubmit={handleFormSubmit}>
        <div>
          <h1>Shipping Address</h1>
        </div>

        <div>
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            placeholder="Enter full name"
            value={fullname}
            onChange={e => setFullName(e.target.value)}
            required
          ></input>
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            placeholder="Enter address"
            value={address}
            onChange={e => setAddress(e.target.value)}
            required
          ></input>
        </div>

        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            placeholder="Enter city"
            value={city}
            onChange={e => setCity(e.target.value)}
            required
          ></input>
        </div>

        <div>
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            placeholder="Enter postal code"
            value={postalCode}
            onChange={e => setPostalCode(e.target.value)}
            required
          ></input>
        </div>

        <div>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            placeholder="Enter country"
            value={country}
            onChange={e => setCountry(e.target.value)}
            required
          ></input>
        </div>

        <div>
          <label />
          <button className="primary" type="submit">Continue</button>
        </div>
      </form>
    </div>
  );
}

export default ShippingAddressScreen;