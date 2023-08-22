import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../../utils/index.js";
import LocalizationValue from "../../utils/localization.js";

function NoteDetail({ note }) {
  return (
    <div className={`detail-page`}>
      <h3 className={`detail-page__title`}>{note.title}</h3>
      <p className={`detail-page__createdAt`}>
        {showFormattedDate(
          LocalizationValue({ id: "id-ID", en: "en-EN" }),
          note.createdAt,
        )}
      </p>
      <p className={`detail-page__body`}>{note.body}</p>
    </div>
  );
}

NoteDetail.propTypes = {
  note: PropTypes.object.isRequired,
};

export default NoteDetail;
