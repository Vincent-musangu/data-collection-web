import React from "react";
import "./right-message.style.css";

const RightMessageBox = (props) => (
  <div className="msg right-msg">
    <div
      className="msg-img"
      style={{
        backgroundImage:
          "url(https://image.flaticon.com/icons/svg/145/145867.svg)",
      }}
    />
    <div className="msg-bubble">
      <div className="msg-info">
        <div className="msg-info-name">David</div>
        <div className="msg-info-time">12:46</div>
      </div>
      <div className="msg-text">{props.phrase}</div>
    </div>
  </div>
);
export default RightMessageBox;
