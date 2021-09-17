import React from "react";
import "./button.styles.scss";

const Button = ({ children, ...props }) => {
  return (
    <button className="customButton" {...props}>
      {children}
    </button>
  );
};

export default Button;
