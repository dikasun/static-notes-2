import React, { useContext } from "react";
import ArchivesNav from "./ArchivesNav.jsx";
import LocalizationNav from "./LocalizationNav.jsx";
import ThemeNav from "./ThemeNav.jsx";
import { ThemeContext } from "../../context/ThemeContext.js";
import LogoutNav from "./LogoutNav.jsx";
import PropTypes from "prop-types";
import { LocaleContext } from "../../context/LocaleContext.js";

function Navigation({ authUser, onLogout }) {
  const { toggleLocale } = useContext(LocaleContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navigation`}>
      <ul>
        {authUser !== null && <ArchivesNav />}
        <LocalizationNav toggleLocale={toggleLocale} />
        <ThemeNav theme={theme} toggleTheme={toggleTheme} />
        {authUser !== null && (
          <LogoutNav username={authUser.name} onLogout={onLogout} />
        )}
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  authUser: PropTypes.object.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default Navigation;
