import React from "react";
import PropTypes from "prop-types";

function BasicField({ label, value, onValueChange }) {
  return (
    <>
      <label htmlFor={label.toLowerCase()}>{label}</label>
      <input
        id={label.toLowerCase()}
        type="text"
        required
        value={value}
        onChange={onValueChange}
      />
    </>
  );
}

BasicField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
};

export default BasicField;
