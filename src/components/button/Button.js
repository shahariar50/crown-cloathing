import React from "react";
import "./button.styles.scss";

const Button = ({
  children,
  isGoogleSignIn,
  className,
  inverted,
  ...props
}) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      } customButton ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
