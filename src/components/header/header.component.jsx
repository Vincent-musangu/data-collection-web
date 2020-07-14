import React from "react";
import "./header.style.scss";
import { Link } from "react-router-dom";
const Header = () => (
  <div className="header">
    <Link className="logo-container option" to="/">
      Vision AI
    </Link>
    <div className="options">
      <Link className="option" to="/services">
        Services
      </Link>
      <Link className="option"> Contact us</Link>
      <Link className="option" to="/signin">
        Sign in
      </Link>
      <Link className="option" to="/signup">
        Sign up
      </Link>
    </div>
  </div>
);
export default Header;
