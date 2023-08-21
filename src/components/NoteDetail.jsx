import PropTypes from "prop-types";
import { showFormattedDate } from "../utils/index.js";

function NoteDetail({ note }) {
  return (
    <div className={`detail-page`}>
      <h3 className={`detail-page__title`}>{note.title}</h3>
      <p className={`detail-page__createdAt`}>
        {showFormattedDate(note.createdAt)}
      </p>
      <p className={`detail-page__body`}>{note.body}</p>
    </div>
  );
}

NoteDetail.propTypes = {
  note: PropTypes.object.isRequired,
};

export default NoteDetail;
