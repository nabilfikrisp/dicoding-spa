import React from "react";
import PropTypes from "prop-types";
import styles from "./note-list.module.css";
import Note from "../Note/inde";

const NoteList = ({ notes }) => {
  return (
    <div className={styles.container}>
      {notes.length > 0 ? (
        notes.map((note) => <Note note={note} key={note.id} />)
      ) : (
        <p className={styles.empty}>You have no note with this type</p>
      )}
    </div>
  );
};
NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default NoteList;
