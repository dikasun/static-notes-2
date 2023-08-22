import React from "react";
import PropTypes from "prop-types";

function PasswordField({ label, value, onValueChange }) {
  return (
    <>
      <label htmlFor="password">{label}</label>
      <input
        id="password"
        type="password"
        required
        minLength={6}
        value={value}
        onChange={onValueChange}
      />
    </>
  );
}

PasswordField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
};

export default PasswordField;
