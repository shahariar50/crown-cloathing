import React from "react";
import "./checkoutItem.styles.scss";

const CheckoutItem = ({ item: { name, imageUrl, price, quantity } }) => {
  return (
    <div className="checkoutItem">
      <div className="imageContainer">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <span className="removeButton">&#10005;</span>
    </div>
  );
};

export default CheckoutItem;
