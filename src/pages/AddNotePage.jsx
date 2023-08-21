import React, { useState } from "react";
import SubmitButton from "../components/buttons/SubmitButton.jsx";
import NoteInput from "../components/NoteInput.jsx";
import { addNote } from "../utils/local-data.js";
import { useNavigate } from "react-router-dom";

export default function AddNotePage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  return (
    <form
      className={`add-new-page__input`}
      onSubmit={(e) => {
        e.preventDefault();
        addNote({ title, body });
        navigate("/");
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
