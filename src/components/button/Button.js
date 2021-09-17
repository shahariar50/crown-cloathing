import React from "react";
import "./button.styles.scss";

const Button = ({ children, isGoogleSignIn, className, ...props }) => {
  return (
    <button
      className={`${
        isGoogleSignIn ? "google-sign-in" : ""
      } customButton ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
