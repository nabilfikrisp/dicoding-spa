import React from "react";
import "./notes.css";
import NoteList from "../../components/NoteList";
import { getActiveNotes } from "../../utils/local-data";
import { Link, useSearchParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar";

const Notes = () => {
  const activeNotes = getActiveNotes();
  const [searchParams] = useSearchParams();
  const showedNotes = searchParams.get("title")
    ? activeNotes.filter((note) =>
        note.title.toLowerCase().includes(searchParams.get("title"))
      )
    : activeNotes;

  return (
    <div className="notes-page">
      <h1 className="notes-page_title">Active Note</h1>
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

export default Notes;
