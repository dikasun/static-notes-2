import React, { useContext, useState } from "react";
import SubmitButton from "../components/buttons/SubmitButton.jsx";
import NoteInput from "../components/notes/NoteInput.jsx";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/network-data.js";
import LoadingContext from "../context/LoadingContext.js";

export default function AddNotePage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();
  const { toggleLoading } = useContext(LoadingContext);

  return (
    <form
      className={`add-new-page__input`}
      onSubmit={(e) => {
        e.preventDefault();
        addNote({ title, body })
          .then((_) => {
            toggleLoading();
            navigate("/");
          })
          .finally(() => toggleLoading());
      }}
    >
      <NoteInput
        title={title}
        onTitleChange={setTitle}
        onBodyChange={(key) => setBody(key)}
      />
      <SubmitButton />
    </form>
  );
}
