import React from "react";
import "./menuItem.styles.scss";

const MenuItem = ({ title, img }) => {
  return (
    <div className="menu-item" style={{ backgroundImage: `url(${img})` }}>
      <div className="content">
        <h3>{title}</h3>
        <span>Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItem;
