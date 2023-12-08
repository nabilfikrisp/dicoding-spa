import React, { useEffect, useState } from "react";
import styles from "./notes.module.css";
import NoteList from "../../components/NoteList";
import { getActiveNotes } from "../../utils/network-data";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import LoadingState from "../../components/LoadingState";
import { useThemeContext } from "../../contexts/ThemeContext";
import { useLangContext } from "../../contexts/LangContext";

const Notes = () => {
  const { lang } = useLangContext();
  const { theme } = useThemeContext();
  const { state } = useLocation();
  const [activeNotes, setActiveNotes] = useState([]);
  const [showedNotes, setShowedNotes] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

  const text = {
    en: {
      title: "Active Notes",
    },
    id: {
      title: "Catatan Aktif",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await getActiveNotes();
        setActiveNotes(data);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [state]);

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
      <div className={[styles.wrapper, styles[theme]].join(" ")}>
        <SearchBar />
        <NoteList notes={showedNotes} />
      </div>
      <Link className={styles[`btn${theme}`]} to="/note/new">
        +
      </Link>
    </div>
  );
};

export default Notes;
