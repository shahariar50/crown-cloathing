import React from "react";
import "./collectionItem.styles.scss";

const CollectionItem = ({ id, name, imageUrl, price }) => {
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
    </div>
  );
};

export default CollectionItem;
