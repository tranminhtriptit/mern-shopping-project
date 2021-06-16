import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import * as api from "api"

import "./styles.scss"
import { getDetailsOrder, payOrder } from 'actions/order.action';
import LoadingBox from 'components/LoadingBox';
import MessageBox from 'components/MessageBox';
import { ORDER_PAY_RESET } from 'constant/order.constant';


function OrderScreen(props) {
  const orderId = props.match.params.id
  const orderDetails = useSelector(state => state.orderDetails)
  const { orderInfo, loading, error } = orderDetails
  const userSignin = useSelector(state => state.userSignin)
  const { userInfo } = userSignin

  const dispatch = useDispatch()

  const [sdkReady, setSdkReady] = useState(false)
  const addPayPalScript = async () => {
    const { data } = await api.fetchPaypalClientId()

    const script = document.createElement("script")
    script.src = `https://www.paypal.com/sdk/js?client-id=${data}`
    script.async = true
    script.onload = () => { setSdkReady(true) }

    document.body.appendChild(script)
  }

  const orderPay = useSelector(state => state.orderPay)
  const { error: errorPay, success: successPay, loading: loadingPay } = orderPay

  const handleSuccessPayment = (paymentResult) => {
    dispatch(payOrder(orderInfo, paymentResult))
  }

  const handlePurchaseForFree = () => {
    const paymentResult = {
      id: orderId,
      status: "success",
      update_time: String(Date.now()),
      email_address: userInfo.email
    }
    dispatch(payOrder(orderInfo, paymentResult))
  }

  useEffect(() => {
    if (!orderInfo || successPay || (orderInfo && orderInfo._id !== orderId)) {
      dispatch({ type: ORDER_PAY_RESET })
      dispatch(getDetailsOrder(orderId))
    } else {
      if (!orderInfo.isPaid) {
        if (!window.paypal) {
          addPayPalScript()
        } else {
          setSdkReady(true)
        }
      }
    }
  }, [dispatch, orderId, orderInfo, successPay])

  return (
    <div className="order-screen-background">
      <h1>{`Order ${orderId}`}</h1>
      {loading ? <LoadingBox /> :
        error ? <MessageBox variant="danger">{error}</MessageBox> : (
          <div className="order-screen">
            <div className="order-screen__left">
              <div>
                <h2>Shipping</h2>
                <p>
                  <strong>Name:</strong> {orderInfo.shippingAddress.fullname} <br />
                  <strong>Address:</strong> {orderInfo.shippingAddress.address}, {" "}
                  {orderInfo.shippingAddress.city}, {" "} {orderInfo.shippingAddress.postalCode}, {" "}
                  {orderInfo.shippingAddress.country}
                </p>
                {orderInfo.isDelivered
                  ? <MessageBox variant="success">Delivered at {orderInfo.deleveredAt}</MessageBox>
                  : <MessageBox variant="danger" >Not Delivered</MessageBox>
                }
              </div>

              <div>
                <h2>Payment</h2>
                <p>
                  <strong>Method:</strong> {orderInfo.paymentMethod}
                </p>
                {orderInfo.isPaid
                  ? <MessageBox >Paid at {orderInfo.paidAt.substring(0, 10)}</MessageBox>
                  : <MessageBox variant="danger" >Not Paid</MessageBox>
                }
              </div>

              <div>
                <h2>Order Items</h2>
                <ul>
                  {orderInfo.orderItems.map(item => (
                    <div key={item.product}>
                      <li>
                        <div className="image"> <img src={api.url + item.image} alt={item.name} /> </div>
                        <div className="info"> <h2>{item.name}</h2> </div>
                        <div className="price"> <h2>{item.qty} x ${item.price} = ${item.qty * item.price}</h2> </div>
                      </li>
                      <div />
                    </div>
                  ))}
                </ul>
              </div>
            </div>

            <div className="order-screen__right">
              <div>
                <h2>Order Summary</h2>
                <div>
                  <p>Items</p>
                  <p>${orderInfo.itemsPrice}</p>
                </div>
                <div>
                  <p>Shipping</p>
                  <p>${orderInfo.shippingPrice}</p>
                </div>
                <div>
                  <p>Tax</p>
                  <p>${orderInfo.taxPrice}</p>
                </div>
                <div>
                  <p><strong>Order Total</strong></p>
                  <p><strong>${orderInfo.totalPrice}</strong></p>
                </div>
                {
                  !orderInfo.isPaid && !sdkReady ? (<LoadingBox />) : (
                    <>
                      {errorPay && <MessageBox variant="danger">{errorPay}</MessageBox>}
                      {loadingPay && <LoadingBox />}
                      <PayPalButton
                        amount={orderInfo.totalPrice}
                        onSuccess={handleSuccessPayment}
                      ></PayPalButton>
                    </>
                  )
                }
                <div>
                  <button
                    className="primary block"
                    onClick={handlePurchaseForFree}
                  >
                    Purchase for free
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
  )
}

export default OrderScreen;