import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { editNote, getNote } from "../../utils/local-data";
import styles from "./note-detail.module.css";
import { showFormattedDate } from "../../utils";
import NoteDetailActions from "../../components/NoteDetailActions";

const NoteDetail = () => {
  const { id } = useParams();
  const note = getNote(id);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [body, setBody] = useState(note.body);

  const onSaveClick = () => {
    editNote({ id, title, body });
  };

  return (
    <div className={styles.noteDetail}>
      {isEditing ? (
        <form className={styles.wrapper}>
          <input
            type="text"
            value={title}
            className={styles.titleEdit}
            onChange={(e) => setTitle(e.target.value)}
          />
          <p className={styles.date}>{showFormattedDate(note.createdAt)}</p>
          <textarea
            className={styles.bodyEdit}
            rows={10}
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </form>
      ) : (
        <div className={styles.wrapper}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.date}>{showFormattedDate(note.createdAt)}</p>
          <p className={styles.body}>{body}</p>
        </div>
      )}

      <NoteDetailActions
        note={note}
        setIsEditing={setIsEditing}
        isEditing={isEditing}
        onSaveClick={() => {
          onSaveClick();
        }}
      />
    </div>
  );
};

export default NoteDetail;
