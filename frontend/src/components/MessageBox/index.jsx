import React from 'react'
import "./styles.scss"

function MessageBox(props) {
  return (
    <div className={`alert alert__${props.variant || "info"}`}>
      {props.children}
    </div>
  );
}

export default MessageBox;