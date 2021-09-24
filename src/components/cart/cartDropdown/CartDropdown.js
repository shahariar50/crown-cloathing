import React from "react";
import "./cartDropdown.styles.scss";
import Button from "../../button/Button";
import CartItem from "../cartItem/CartItem";
import { withRouter } from "react-router";
import { toggleCartHidden } from "../../../store/reducer/cartReducer";
import { connect } from "react-redux";

const mapStateToProps = ({ cart }) => ({ cart });

const CartDropdown = ({ cart, history, dispatch }) => {
  return (
    <div className="cartDropdown">
      <div className="cartItems">
        {cart.data.length ? (
          cart?.data?.map((item) => <CartItem item={item} key={item.id} />)
        ) : (
          <span className="emptyMessage">Your cart is empty.</span>
        )}
      </div>
      <Button
        onClick={() => {
          dispatch(toggleCartHidden());
          history.push("/checkout");
        }}
      >
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

export default withRouter(connect(mapStateToProps)(CartDropdown));
