import React from "react";
import "./left-message.style.css";

const LeftMessageBox = (props) => (
  <div className="msg left-msg">
    <div
      className="msg-img"
      style={{
        backgroundImage:
          "url(https://image.flaticon.com/icons/svg/327/327779.svg)",
      }}
    />
    <div className="msg-bubble">
      <div className="msg-info">
        <div className="msg-info-name">BOT</div>
        <div className="msg-info-time">12:45</div>
      </div>
      <div className="msg-text">{props.phrase}</div>
    </div>
  </div>
);
export default LeftMessageBox;
