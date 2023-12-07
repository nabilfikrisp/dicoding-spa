import React from "react";
import styles from "./notes.module.css";
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
    <div className={styles.notesPage}>
      <h1 className={styles.title}>Active Note</h1>
      <div className={styles.wrapper}>
        <SearchBar />
        <NoteList notes={showedNotes} />
      </div>
      <Link className={styles.btn} to="/note/new">
        +
      </Link>
    </div>
  );
};

export default Notes;
