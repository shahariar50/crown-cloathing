import React from "react";
import { connect } from "react-redux";
import Collection from "../components/collections/Collection";
import { selectCategoryItemByParam } from "../store/reducer/shopReducer";

const mapStateToProps = ({ shop }, { match }) => ({
  category: selectCategoryItemByParam(match.params.category)(shop),
});

const categorypage = ({ match, category }) => {
  console.log(match, category);
  return (
    <div className="categoryPage">
      <h2>{category.title} Collection</h2>
      <Collection items={category.items} />
    </div>
  );
};

export default connect(mapStateToProps)(categorypage);
