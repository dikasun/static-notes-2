import React from "react";
import { showFormattedDate } from "../../utils/index.js";
import NoteItem from "./NoteItem.jsx";
import PropTypes from "prop-types";
import LocalizationValue from "../../utils/localization.js";

function NoteList({ notes, isArchive }) {
  return notes.length === 0 ? (
    <div className="notes-list-empty">
      <p>
        {isArchive
          ? LocalizationValue({ id: "Arsip kosong", en: "Archives is empty" })
          : LocalizationValue({ id: "Catatan kosong", en: "Notes is empty" })}
      </p>
    </div>
  ) : (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          title={note.title}
          date={showFormattedDate(
            LocalizationValue({ id: "id-ID", en: "en-EN" }),
            note.createdAt,
          )}
          body={note.body}
        />
      ))}
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  isArchive: PropTypes.bool.isRequired,
};

export default NoteList;
