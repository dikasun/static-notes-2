import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaArchive } from "react-icons/fa";

function ArchiveButton({ onArchive }) {
  return (
    <Link className="action" onClick={onArchive} to="/">
      <FaArchive className="action" />
    </Link>
  );
}

ArchiveButton.propTypes = {
  onArchive: PropTypes.func.isRequired,
};

export default ArchiveButton;
