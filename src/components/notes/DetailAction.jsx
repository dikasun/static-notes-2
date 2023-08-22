import React from "react";
import ArchiveButton from "../buttons/ArchiveButton.jsx";
import DeleteButton from "../buttons/DeleteButton.jsx";
import PropTypes from "prop-types";

function DetailAction({ onArchive, onDelete }) {
  return (
    <div className={`detail-page__action`}>
      <ArchiveButton onArchive={onArchive} />
      <DeleteButton onDelete={onDelete} />
    </div>
  );
}

DetailAction.propTypes = {
  onArchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DetailAction;
