import React, { useEffect, useState } from "react";
import styles from "./archived-notes.module.css";
import NoteList from "../../components/NoteList";
import { Link, useSearchParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import { getArchivedNotes } from "../../utils/network-data";
import LoadingState from "../../components/LoadingState";
import { useThemeContext } from "../../contexts/ThemeContext";
import { useLangContext } from "../../contexts/LangContext";

const ArchivedNotes = () => {
  const { lang } = useLangContext();
  const { theme } = useThemeContext();
  const [activeNotes, setActiveNotes] = useState([]);
  const [showedNotes, setShowedNotes] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

  const text = {
    en: {
      title: "Archived Notes",
    },
    id: {
      title: "Catatan Terarsip",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await getArchivedNotes();
        setActiveNotes(data);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (activeNotes) {
      setShowedNotes(
        searchParams.get("title")
          ? activeNotes.filter((note) =>
              note.title
                .toLowerCase()
                .includes(searchParams.get("title").toLocaleLowerCase())
            )
          : activeNotes
      );
    }
  }, [searchParams, activeNotes]);

  if (error) {
    return <div>error fetching data, please refresh</div>;
  }

  if (loading) {
    return <LoadingState />;
  }

  return (
    <div className={[styles.notesPage, styles[theme]].join(" ")}>
      <h1 className={styles[`title${theme}`]}>{text[lang].title}</h1>
      <div className={styles.wrapper}>
        <SearchBar />
        <NoteList notes={showedNotes} />
      </div>
      <Link className={styles[`newNoteBtn${theme}`]} to="/note/new">
        +
      </Link>
    </div>
  );
};

export default ArchivedNotes;
