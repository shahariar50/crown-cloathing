import React from "react";
import "./cartDropdown.styles.scss";
import Button from "../../button/Button";
import CartItem from "../cartItem/CartItem";

const CartDropdown = ({ items }) => {
  return (
    <div className="cartDropdown">
      <div className="cartItems">
        {items?.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
