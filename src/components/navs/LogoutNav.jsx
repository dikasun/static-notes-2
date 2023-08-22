import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import PropTypes from "prop-types";

function LogoutNav({ username, onLogout }) {
  return (
    <li>
      <button className="button-logout" onClick={onLogout}>
        <FaSignOutAlt />
        {username}
      </button>
    </li>
  );
}

LogoutNav.propTypes = {
  username: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default LogoutNav;
