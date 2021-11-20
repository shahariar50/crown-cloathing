import React from "react";
import { connect } from "react-redux";
import CollectionItems from "../components/collections/CollectionItems";

const mapStateToProps = ({ shop }) => ({ shop });

const ShopPage = ({ shop: { data: collections } }) => {
  return (
    <div className="shopPage">
      {collections.map((collection) => (
        <CollectionItems
          key={collection.id}
          title={collection.title}
          items={collection.items}
        />
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(ShopPage);
