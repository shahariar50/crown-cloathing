import React from "react";
import { ReactComponent as ShoppingIcon } from "../../../assets/img/shopping-bag.svg";
import "./cartIcon.styles.scss";

const CartIcon = () => {
  return (
    <div className="cartIcon">
      <ShoppingIcon className="shoppingIcon" />
      <span className="itemCount">0</span>
    </div>
  );
};

export default CartIcon;
