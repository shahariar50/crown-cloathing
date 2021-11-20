import React from "react";
import { connect } from "react-redux";
import CheckoutItem from "../../components/checkout/checkoutItem/CheckoutItem";
import { selectTotalItemsPrice } from "../../store/reducer/cartReducer";
import "./checkoutPage.styles.scss";

const mapStateToProps = ({ cart }) => ({ cart });

const CheckoutPage = ({ cart }) => {
  return (
    <div className="checkoutPage">
      <div className="checkoutHeader">
        <div className="headerBlock">
          <span>Product</span>
        </div>
        <div className="headerBlock">
          <span>Description</span>
        </div>
        <div className="headerBlock">
          <span>Quantity</span>
        </div>
        <div className="headerBlock">
          <span>Price</span>
        </div>
        <div className="headerBlock">
          <span>Remove</span>
        </div>
      </div>
      {cart?.data?.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <div className="total">
        <span>Total: {selectTotalItemsPrice(cart)}</span>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(CheckoutPage);
