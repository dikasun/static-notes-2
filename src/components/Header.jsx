import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./navs/Navigation.jsx";
import PropTypes from "prop-types";

function Header({ authUser, onLogout }) {
  return (
    <header>
      <h1>
        <Link to={"/"}>Static Notes</Link>
      </h1>
      <Navigation authUser={authUser} onLogout={onLogout} />
    </header>
  );
}

Header.propTypes = {
  authUser: PropTypes.object,
  onLogout: PropTypes.func.isRequired,
};

export default Header;
