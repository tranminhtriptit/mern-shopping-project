import React from 'react';
import "./styles.scss"

function CheckoutSteps(props) {
  return (
    <div className="checkout-steps">
      <div className={props.step1 ? "activeCS" : ""}>Sign-In</div>
      <div className={props.step2 ? "activeCS" : ""}>Shipping</div>
      <div className={props.step3 ? "activeCS" : ""}>Payment</div>
      <div className={props.step4 ? "activeCS" : ""}>Place Order</div>
    </div>
  );
}

export default CheckoutSteps;