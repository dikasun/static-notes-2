import React, { useContext, useEffect, useState } from "react";
import SearchBar from "../components/notes/SearchBar.jsx";
import NoteList from "../components/notes/NoteList.jsx";
import { useSearchParams } from "react-router-dom";
import { getArchivedNotes } from "../utils/network-data.js";
import LocalizationValue from "../utils/localization.js";
import LoadingContext from "../context/LoadingContext.js";

export default function ArchivePage() {
  const [notes, setNotes] = useState([]);
  const [searchNotes, setSearchNotes] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(searchParams.get("key") || "");
  const { toggleLoading } = useContext(LoadingContext);

  useEffect(() => {
    getArchivedNotes()
      .then((res) => {
        toggleLoading();
        !res.error && setNotes(res.data);
      })
      .finally(() => toggleLoading());

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
      <h2>{LocalizationValue({ id: "Arsip", en: "Archives" })}</h2>
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
        isArchive={true}
      />
    </>
  );
}
