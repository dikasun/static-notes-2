import React from "react";
import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

function DeleteButton({ onDelete }) {
  return (
    <Link className="action" onClick={onDelete} to="/">
      <FaTrash className="action" />
    </Link>
  );
}

DeleteButton.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
