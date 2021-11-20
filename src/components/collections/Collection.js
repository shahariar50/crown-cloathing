import React from "react";
import CollectionItem from "./CollectionItem";
import "./collection.styles.scss";

const Collection = ({ title, items, limit = false }) => {
  return (
    <div className="collectionItems">
      {title && <h1 className="title">{title}</h1>}
      <div className="preview">
        {items
          ?.filter((item, index) => (limit ? index < limit : true))
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default Collection;
