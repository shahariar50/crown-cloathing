import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../../assets/img/shopping-bag.svg";
import { selectTotalItemsCount } from "../../../store/reducer/cartReducer";
import "./cartIcon.styles.scss";

const mapStateToProps = ({ cart }) => ({ cart });

const CartIcon = ({ cart, dispatch, ...props }) => {
  return (
    <div className="cartIcon" {...props}>
      <ShoppingIcon className="shoppingIcon" />
      <span className="itemCount">{selectTotalItemsCount(cart)}</span>
    </div>
  );
};

export default connect(mapStateToProps)(CartIcon);
