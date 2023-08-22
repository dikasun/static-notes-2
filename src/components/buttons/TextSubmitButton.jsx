import React from "react";
import PropTypes from "prop-types";

function TextSubmitButton({ text }) {
  return <button type="submit">{text}</button>;
}

TextSubmitButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TextSubmitButton;
