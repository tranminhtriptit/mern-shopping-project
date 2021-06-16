import React from 'react';

import "./styles.scss"

function WarningScreen(props) {
  const { yes, no, result } = props

  const handleClickButton = (answer) => {
    result(answer)
  }

  return (
    <div className="warning-screen center">
      <div className="warning-screen__container">
        <div className="warning-screen__container--content">
          {props.children}
        </div>
        <div className="warning-screen__container--answer">
          {yes && <button className="primary" onClick={() => handleClickButton(true)}>{yes}</button>}
          {no && <button className="primary" onClick={() => handleClickButton(false)}>{no}</button>}
        </div>
      </div>
    </div>
  );
}

export default WarningScreen;