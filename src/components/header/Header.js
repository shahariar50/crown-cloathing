import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/img/crown.svg";

const Header = () => {
  return (
    <div className="header">
      <Link className="logoContainer" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/signin-and-signup">
          Login/Signin
        </Link>
      </div>
    </div>
  );
};

export default Header;
