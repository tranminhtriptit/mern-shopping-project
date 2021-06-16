import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import "./styles.scss"
import { getListOrder, removeOrder } from 'actions/order.action';
import LoadingBox from 'components/LoadingBox';
import MessageBox from 'components/MessageBox';
import WarningScreen from 'screens/WarningScreen';
import { useState } from 'react';

function OrderHistoryScreen(props) {
  const mineOrders = useSelector(state => state.mineOrders)
  const { listOrder, loading, error } = mineOrders

  const dispatch = useDispatch()
  const [answer, setAnswer] = useState(null)
  const [warning, setWarning] = useState({
    type: "",
    target: "",
  })

  const handleCancelClick = (order) => {
    if (order.isPaid) {
      setWarning({ type: "isPaidOrder", target: order._id })
    } else {
      setWarning({ type: "removeOrder", target: order._id })
    }
  }

  useEffect(() => {
    if (answer) {
      dispatch(removeOrder(warning.target))
    }
    setAnswer(null)
    setWarning({})
  }, [answer])

  useEffect(() => {
    dispatch(getListOrder())
  }, [dispatch])

  return (
    <>
      {warning.type === "removeOrder" && (
        <WarningScreen yes="OK" no="Cancel" result={setAnswer}>
          Do you really want to delete <strong>ORDER {warning.target}</strong>?
        </WarningScreen>
      )}
      {warning.type === "isPaidOrder" && (
        <WarningScreen yes="Sure" no="Cancel" result={setAnswer}>
          This <strong>ORDER {warning.target}</strong> already purchase, are you sure to remove it?
        </WarningScreen>
      )}
      <div className="order-history-screen">
        <h1>Order History</h1>

        {loading ? <LoadingBox /> :
          error ? <MessageBox variant="danger">{error}</MessageBox> :
            <table className="table">
              <thead>
                <tr>
                  <th colSpan="4">ID</th>
                  <th colSpan="2">DATE</th>
                  <th colSpan="2">TOTAL</th>
                  <th colSpan="2">PAID</th>
                  <th colSpan="2">DELIVERED</th>
                  <th colSpan="1">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {listOrder.map(order => (
                  <tr key={order._id}>
                    <td colSpan="4">{order._id}</td>
                    <td colSpan="2">{order.createdAt.substring(0, 10)}</td>
                    <td colSpan="2">${order.totalPrice}</td>
                    <td colSpan="2">{order.isPaid ? order.paidAt.substring(0, 10) : "No"}</td>
                    <td colSpan="2">{order.isDelivered ? order.isDelivered.substring(0, 10) : "No"}</td>
                    <td colSpan="1">
                      <div>
                        <button
                          type="button"
                          className="primary"
                          onClick={() => { props.history.push(`/order/${order._id}`) }}
                        >Details</button>
                        {!order.isDelivered && <button
                          type="button"
                          className="primary"
                          onClick={() => handleCancelClick(order)}
                        >Cancel</button>}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
        }
      </div>
    </>
  );
}

export default OrderHistoryScreen;