import React from 'react';
import "./styles.scss"

function LoadingBox(props) {
  return (
    <div className="loading">
      <i className="fa fa-spinner fa-spin" /> Loading...
    </div>
  );
}

export default LoadingBox;