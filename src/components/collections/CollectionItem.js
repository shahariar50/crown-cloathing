import React from "react";
import { connect } from "react-redux";
import { addItemToCart } from "../../store/reducer/cartReducer";
import Button from "../button/Button";
import "./collectionItem.styles.scss";

const mapStateToProps = ({ cart }) => ({ cart });

const CollectionItem = ({ item, dispatch }) => {
  const { imageUrl, price, name } = item;

  return (
    <div className="collectionItem">
      <div
        className="image"
        style={{ backgroundImage: `url("${imageUrl}")` }}
      />
      <div className="collectionFooter">
        <span className="name">{name}</span>
        <span className="name">{price}</span>
      </div>
      <Button onClick={() => dispatch(addItemToCart(item))} inverted>
        Add to cart
      </Button>
    </div>
  );
};

export default connect(mapStateToProps)(CollectionItem);
