import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NoteDetail from "../components/notes/NoteDetail.jsx";
import NotFound from "../components/notes/NotFound.jsx";
import DetailAction from "../components/notes/DetailAction.jsx";
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../utils/network-data.js";
import LoadingContext from "../context/LoadingContext.js";

export default function DetailPage() {
  const [note, setNote] = useState();
  const { id } = useParams();
  const { toggleLoading } = useContext(LoadingContext);

  useEffect(() => {
    getNote(id)
      .then((res) => {
        toggleLoading();
        !res.error && setNote(res.data);
      })
      .finally(() => toggleLoading());
  }, []);

  return note ? (
    <>
      <NoteDetail note={note} />
      <DetailAction
        onDelete={() => {
          deleteNote(id).then((_) => {});
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
