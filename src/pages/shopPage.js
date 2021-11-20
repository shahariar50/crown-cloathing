import React from "react";
import { connect } from "react-redux";
import Collection from "../components/collections/Collection";

const mapStateToProps = ({ shop }) => ({ shop });

const ShopPage = ({ shop: { data: collections } }) => {
  return (
    <div className="shopPage">
      {collections.map((collection) => (
        <Collection
          key={collection.id}
          title={collection.title}
          items={collection.items}
          limit={4}
        />
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(ShopPage);
