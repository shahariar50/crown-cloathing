import React from "react";
import { connect } from "react-redux";
import MenuItem from "../menu-items/MenuItem";
import "./directory.styles.scss";

const mapStateToProps = ({ directories }) => ({ directories });

const Directory = ({ directories: { data: directories } }) => (
  <div className="directory-menu">
    {directories.map((section) => (
      <MenuItem key={section.id} {...section} />
    ))}
  </div>
);

export default connect(mapStateToProps)(Directory);
