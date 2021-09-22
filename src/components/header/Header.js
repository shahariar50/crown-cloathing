import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/img/crown.svg";
import { auth } from "../../utils/firebase/firebase";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logoContainer" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        {currentUser.data ? (
          <div
            className="option"
            onClick={() => auth.signOut()}
            style={{ cursor: "pointer" }}
          >
            Signout
          </div>
        ) : (
          <Link className="option" to="/signin-and-signup">
            Login/Signin
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
