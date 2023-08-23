import React from "react";
import PropTypes from "prop-types";
import { ThemeType } from "../../context/ThemeContext.js";
import { BiMoon, BiSun } from "react-icons/bi";

function ThemeNav({ theme, toggleTheme }) {
  return (
    <li>
      <button className="toggle-locale" onClick={toggleTheme}>
        {theme === ThemeType.LIGHT ? <BiSun /> : <BiMoon />}
      </button>
    </li>
  );
}

ThemeNav.propTypes = {
  theme: PropTypes.string,
  toggleTheme: PropTypes.func.isRequired,
};

export default ThemeNav;
