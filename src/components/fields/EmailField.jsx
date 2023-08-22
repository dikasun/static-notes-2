import React from "react";
import PropTypes from "prop-types";

function EmailField({ value, onValueChange }) {
  return (
    <>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        required
        value={value}
        onChange={onValueChange}
      />
    </>
  );
}

EmailField.propTypes = {
  value: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
};

export default EmailField;
