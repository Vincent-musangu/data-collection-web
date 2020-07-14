import React from "react";
import "./home.style.css";
import Image from "../../assets/../assets/1.jpg";

const Home = () => (
  <div
    className="home"
    style={{
      background: `url(${Image})`,
    }}
  ></div>
);
export default Home;
