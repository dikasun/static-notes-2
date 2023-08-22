import React from "react";
import { MdGTranslate } from "react-icons/md";
import PropTypes from "prop-types";

function LocalizationNav({ toggleLocale }) {
  return (
    <li>
      <button className="toggle-locale" onClick={toggleLocale}>
        <MdGTranslate />
      </button>
    </li>
  );
}

LocalizationNav.propTypes = {
  toggleLocale: PropTypes.func.isRequired,
};

export default LocalizationNav;
