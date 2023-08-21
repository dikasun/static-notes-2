import React from "react";
import { showFormattedDate } from "../utils/index.js";
import NoteItem from "./NoteItem.jsx";
import PropTypes from "prop-types";

function NoteList({ notes, isArchive }) {
  return notes.length === 0 ? (
    <div className="notes-list-empty">
      <p>{isArchive ? "Archives is empty" : "Notes is Empty"}</p>
    </div>
  ) : (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          title={note.title}
          date={showFormattedDate(note.createdAt)}
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
