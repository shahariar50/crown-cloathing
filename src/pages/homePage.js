import React from "react";
import "./../styles/pages/home.styles.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h3>Hats</h3>
            <span>Shop Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h3>Jackets</h3>
            <span>Shop Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h3>Snickers</h3>
            <span>Shop Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h3>Womens</h3>
            <span>Shop Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h3>Mens</h3>
            <span>Shop Now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
