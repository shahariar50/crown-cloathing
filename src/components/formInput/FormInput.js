import React from "react";
import "./formInput.styles.scss";

const FormInput = ({ label = false, value, ...props }) => {
  return (
    <div className="group">
      <input className="formInput" value={value} {...props} />
      {label && (
        <label className={`${value?.length ? "shrink" : ""} formInputLabel`}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
