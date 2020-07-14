import React, { useState } from "react";
import "./input-box.style.css";
export const contextProvider = React.createContext(null);
export const ContextConsumer = contextProvider.Consumer;

const InputBox = () => {
  const [transValue, settransValue] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    return transValue;
  };
  return (
    <div>
      <contextProvider.Provider value={(transValue, handleSubmit)}>
        <form className="msger-inputarea" onSubmit={() => handleSubmit}>
          <input
            type="text"
            className="msger-input"
            placeholder="Enter your translation"
            onChange={(e) => {
              settransValue(e.target.value);
            }}
            value={transValue}
          />
          <button type="submit" className="msger-send-btn">
            Send Translation
          </button>
        </form>
      </contextProvider.Provider>
    </div>
  );
};
export default InputBox;
