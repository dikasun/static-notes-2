import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

function AddButton() {
  return (
    <Link className={`action homepage__action`} to={"/notes/new"}>
      <FaPlus className={`action`} />
    </Link>
  );
}

export default AddButton;
