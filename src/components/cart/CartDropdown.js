import React from "react";
import "./cartDropdown.styles.scss";
import Button from "../button/Button";

const CartDropdown = () => {
  return (
    <div className="cartDropdown">
      <div className="cartItems"></div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
