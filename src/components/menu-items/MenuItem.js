import React from "react";
import { withRouter } from "react-router-dom";
import "./menuItem.styles.scss";

const MenuItem = ({ title, img, size, history, linkUrl, match }) => {
  console.log(match);
  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="content">
        <h3>{title.toUpperCase()}</h3>
        <span>Shop Now</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
