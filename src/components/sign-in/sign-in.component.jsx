import React, { Component } from "react";
import "./sign-in.style.css";
import Image from "../../assets/../assets/1.jpg";
import { Link } from "react-router-dom";
class SignIn extends Component {
  render() {
    return (
      <div
        className="container"
        style={{
          background: `url(${Image})`,
        }}
      >
        <div className="sign-in">
          <div className="sign-in-form">
            <form className="form-input">
              <h1>Sign in</h1>
              <input type="text" name="phonenumber" placeholder="phonenumber" />
              <input type="password" name="password" placeholder="password" />
              <Link to="/services"> <input type="submit" name="sign-in" value="sign In" /></Link>
              
            </form>
            <p className="sign-in-bottom-text"><Link to="/signup"> Create Account</Link></p>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
