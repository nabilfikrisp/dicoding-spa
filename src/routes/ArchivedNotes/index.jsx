import React from "react";
import "./archived-notes.css";
import NoteList from "../../components/NoteList";
import { getArchivedNotes } from "../../utils/local-data";
import { Link, useSearchParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar";

const ArchivedNotes = () => {
  const archivedNotes = getArchivedNotes();
  const [searchParams] = useSearchParams();
  const showedNotes = searchParams.get("title")
    ? archivedNotes.filter((note) =>
        note.title.toLowerCase().includes(searchParams.get("title"))
      )
    : archivedNotes;
  return (
    <div className="notes-page">
      <h1 className="notes-page_title">Archived Note</h1>
      <div className="notes-page_wrapper">
        <SearchBar />
        <NoteList notes={showedNotes} />
      </div>
      <Link className="new-note_btn" to="/note/new">
        +
      </Link>
    </div>
  );
};

export default ArchivedNotes;
