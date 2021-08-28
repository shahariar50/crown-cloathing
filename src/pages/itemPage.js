import React from "react";
import { withRouter } from "react-router-dom";

const ItemPage = ({ match }) => {
  return <h1>{match.params.title}</h1>;
};

export default withRouter(ItemPage);
