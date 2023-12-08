import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./note-detail.module.css";
import { showFormattedDate } from "../../utils";
import NoteDetailActions from "../../components/NoteDetailActions";
import { getNote } from "../../utils/network-data";
import LoadingState from "../../components/LoadingState";
import { useThemeContext } from "../../contexts/ThemeContext";

const NoteDetail = () => {
  const { theme } = useThemeContext();
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const { error, data } = await getNote(id);
        if (error) {
          setError(false);
          return;
        }
        setNote(data);
        setTitle(data.title);
        setBody(data.body);
        setError(error);
      } catch (error) {
        return;
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return <div>error fetching data, please refresh</div>;
  }

  return (
    <>
      {note && (
        <div className={[styles.noteDetail, styles[theme]].join(" ")}>
          <div className={styles.wrapper}>
            <h2 className={styles[`title${theme}`]}>{title}</h2>
            <p className={[styles.date, styles[theme]].join(" ")}>
              {showFormattedDate(note.createdAt)}
            </p>
            <p className={[styles.body, styles[theme]].join(" ")}>{body}</p>
          </div>

          <NoteDetailActions note={note} />
        </div>
      )}
    </>
  );
};

export default NoteDetail;
