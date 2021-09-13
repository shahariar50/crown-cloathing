import React from "react";
import CollectionItem from "./CollectionItem";
import "./collectionItems.styles.scss";

const CollectionItems = ({ title, items }) => {
  return (
    <div className="collectionItems">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} {...item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionItems;
