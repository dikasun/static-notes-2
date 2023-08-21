import React from "react";
import { useParams } from "react-router-dom";
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../utils/local-data.js";
import NoteDetail from "../components/NoteDetail.jsx";
import NotFound from "../components/NotFound.jsx";
import DetailAction from "../components/DetailAction.jsx";

export default function DetailPage() {
  const { id } = useParams();
  const note = getNote(id);
  return note ? (
    <>
      <NoteDetail note={note} />
      <DetailAction
        onDelete={() => {
          deleteNote(id);
          return "/";
        }}
        onArchive={() => {
          note.archived ? unarchiveNote(id) : archiveNote(id);
          return "/";
        }}
      />
    </>
  ) : (
    <NotFound />
  );
}
