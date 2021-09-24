import React from "react";
import { connect } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../../store/reducer/cartReducer";
import {
  checkIfTheCartItemExist,
  decreaseCartItemQuantity,
} from "../../../utils/cart";
import "./checkoutItem.styles.scss";

const mapStateToProps = ({ cart }) => ({ cart });

const CheckoutItem = ({ item, cart, dispatch }) => {
  return (
    <div className="checkoutItem">
      <div className="imageContainer">
        <img src={item.imageUrl} alt="item" />
      </div>
      <span className="name">{item.name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() =>
            dispatch(addItemToCart(decreaseCartItemQuantity(cart.data, item)))
          }
        >
          &#10094;
        </div>
        <span className="value">{item.quantity}</span>
        <div
          className="arrow"
          onClick={() =>
            dispatch(addItemToCart(checkIfTheCartItemExist(cart.data, item)))
          }
        >
          &#10095;
        </div>
      </span>
      <span className="price">{item.price}</span>
      <span
        className="removeButton"
        onClick={() => dispatch(removeItemFromCart(item))}
      >
        &#10005;
      </span>
    </div>
  );
};

export default connect(mapStateToProps)(CheckoutItem);
