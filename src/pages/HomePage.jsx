import SearchBar from "../components/SearchBar.jsx";
import NoteList from "../components/NoteList.jsx";
import React, { useEffect, useState } from "react";
import { getActiveNotes } from "../utils/local-data.js";
import AddButton from "../components/buttons/AddButton.jsx";
import { useSearchParams } from "react-router-dom";

export default function HomePage() {
  const [notes] = useState(getActiveNotes());
  const [searchNotes, setSearchNotes] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(searchParams.get("key") || "");

  useEffect(() => {
    keyword !== "" &&
      setSearchNotes(
        keyword
          ? notes.filter((note) =>
              note.title.toLowerCase().includes(keyword.toLowerCase()),
            )
          : null,
      );
  }, []);

  return (
    <>
      <h2>Notes</h2>
      <SearchBar
        keyword={keyword}
        onSearch={(key) => {
          setSearchParams({ key });
          setKeyword(key);
          setSearchNotes(
            key
              ? notes.filter((note) =>
                  note.title.toLowerCase().includes(key.toLowerCase()),
                )
              : null,
          );
        }}
      />
      <NoteList
        notes={searchNotes === null ? notes : searchNotes}
        isArchive={false}
      />
      <AddButton />
    </>
  );
}
