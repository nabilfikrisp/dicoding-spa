import React from "react";
import styles from "./archived-notes.module.css";
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
    <div className={styles.notesPage}>
      <h1 className={styles.title}>Archived Note</h1>
      <div className={styles.wrapper}>
        <SearchBar />
        <NoteList notes={showedNotes} />
      </div>
      <Link className={styles.newNoteBtn} to="/note/new">
        +
      </Link>
    </div>
  );
};

export default ArchivedNotes;
