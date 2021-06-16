import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { isExpired } from "react-jwt"

import "./styles.scss"
import { signout } from 'actions/user.action';
import { useEffect } from 'react';
import { useState } from 'react';
import { PRODUCT_LIST_SET_FILTER } from 'constant/product.constant';

function Header(props) {
  const cart = useSelector(state => state.cart)
  const { cartItems } = cart
  const userSignin = useSelector(state => state.userSignin)
  const { userInfo } = userSignin
  const productList = useSelector(state => state.productList)
  const { filters } = productList
  const history = useHistory()

  const [searchTerm, setSearchTerm] = useState("")
  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      const token = JSON.parse(localStorage.getItem("userInfo")).token
      const isMyTokenExpired = isExpired(token);

      if (isMyTokenExpired) {
        dispatch(signout())
      }
    }
  }, [])

  const handleSignOut = () => {
    dispatch(signout())
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()

    dispatch({
      type: PRODUCT_LIST_SET_FILTER,
      payload: { ...filters, search: searchTerm, page: 1 }
    })
    history.push("/")
  }


  return (
    <div className="header-container">
      <div className="header-container__left">
        <p onClick={() => window.location.pathname = "/"}>Amazona</p>
      </div>

      <div className="header-container__middle">
        <form onSubmit={handleFormSubmit}>
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          ></input>
          <div> <i className="fas fa-search"></i> </div>
        </form>
      </div>

      <div className="header-container__right">
        <Link className="body" to="/cart">Cart
          {cartItems.length > 0 && (
            <span className="badge">{cartItems.length}</span>
          )}
        </Link>
        {userInfo ? (
          <div className="dropdown-caret">
            <Link className="body" to="#">{userInfo.name.substring(0, 5)} {" "}
              <i className="fa fa-caret-down" />
            </Link>

            <ul className="dropdown-caret__content">
              <Link to="/order-history">
                <li>Order History</li>
                <div />
              </Link>

              <Link to="/profile">
                <li>Profile</li>
                <div />
              </Link>

              {userInfo.isAdmin && <Link to="/createProduct">
                <li>Create Product</li>
                <div />
              </Link>}

              {userInfo.isAdmin && <Link to="/deliveryManagement">
                <li>Delivery Management</li>
                <div />
              </Link>}

              <Link to="/" onClick={handleSignOut}>
                <li>Sign Out</li>
                <div />
              </Link>
            </ul>
          </div>
        ) : (
            <Link className="body" to="/signin">Sign in</Link>
          )}
      </div>
    </div>
  );
}

export default Header;