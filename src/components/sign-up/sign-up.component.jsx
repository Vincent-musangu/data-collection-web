import React, { Component } from "react";
import "./sign-up.style.css";
import Image from "../../assets/../assets/1.jpg";
import { Link } from "react-router-dom";

class SignUp extends Component {
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
              <h1>Sign up</h1>
              <input type="text" name="firstname" placeholder="first name" />
              <input type="text" name="lastname" placeholder="last name" />
              <input type="text" name="phonenumber" placeholder="phonenumber" />
              <input type="password" name="password" placeholder="password" />
              <input
                type="password"
                name="password1"
                placeholder="confirm password"
              />
              <Link to="/services"> <input type="submit" name="sign-up" value="sign Up" /></Link>

            </form>
            <p className="sign-in-bottom-text"><Link to="/signin"> Sign In</Link></p>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
