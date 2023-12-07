import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../../utils";
import { Link } from "react-router-dom";
import styles from "./note.module.css";

const Note = ({ note }) => {
  return (
    <Link to={`/note/${note.id}`} className={styles.noteItem}>
      <h3 className={styles.title}>{note.title}</h3>
      <p className={styles.date}>{showFormattedDate(note.createdAt)}</p>
      <p className={styles.body}>{note.body}</p>
    </Link>
  );
};

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Note;
