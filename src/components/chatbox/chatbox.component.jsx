import React, { useState, useEffect } from "react";
import "./chatbot.style.css";
import LeftMessageBox from "../left-message/left-message.component.jsx";
import RightMessageBox from "../right-message/right-message.component.jsx";
import InputBox from "../Translate-Form-Box/input-box.component.jsx";
import Axios from "axios";
import "../Translate-Form-Box/input-box.style.css";
import { ContextConsumer } from "../Translate-Form-Box/input-box.component";
const ChatBox = () => {
  const [phrases, setPhrases] = useState([]);
  const [transValue, setTransValue] = useState();
  const [counter, setCounter] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userTrans = {
      phrase: transValue,
    };
    setPhrases([...phrases, userTrans]);
  };
  useEffect(() => {
    Axios.get("http://localhost:4000/api/all-phrases").then((res) => {
      // console.log(res.data);

      setPhrases([...phrases, res.data[0]]);
    });
  }, []);

  const sendPhrase = () => {

    setPhrases([...phrases, transValue]);
  
    Axios.get("http://localhost:4000/api/all-phrases").then((res) => {
      // console.log(res.data);
      setCounter(counter + 1)
      setPhrases([...phrases, res.data[counter]]);
    });
    console.log(phrases);
  }

  const newPhrase = () => {
    Axios.get("http://localhost:4000/api/all-phrases").then((res) => {
      // console.log(res.data);
      setCounter(counter + 1)
      setPhrases([...phrases, res.data[counter]]);
    });

  }
  return (
    <div className="msger">
      <header className="msger-header">
        <div className="msger-header-title">
          <i className="fas fa-comment-alt" /> Simple Translation app
        </div>
        <div className="msger-header-options">
          <span>
            <i className="fas fa-cog" />
          </span>
        </div>
        <button onClick={newPhrase}>Get new </button>
      </header>
      <div className="msger-chat">
        {phrases.map((res, index) => {
          if (res.Id != null) {
            return <LeftMessageBox phrase={res.phrase} key={res.Id} />;
          }
          return <RightMessageBox phrase={res.phrase} key={index + 4} />;
        })}
        <form className="msger-inputarea" onSubmit={handleSubmit}>
          <input
            type="text"
            className="msger-input"
            placeholder="Enter your translation"
            onChange={(e) => {
              setTransValue(e.target.value);
              // console.log(transValue);
            }}
            value={transValue}
          />
          <button
            type="submit"
            className="msger-send-btn"
            onClick={()=>sendPhrase
            }
            
          >
            Send Translation
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
