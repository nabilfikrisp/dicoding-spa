import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../../utils";
import { Link } from "react-router-dom";
import styles from "./note.module.css";
import { useThemeContext } from "../../contexts/ThemeContext";

const Note = ({ note }) => {
  const { theme } = useThemeContext();
  return (
    <Link to={`/note/${note.id}`} className={styles[`noteItem${theme}`]}>
      <h3 className={styles[`title${theme}`]}>{note.title}</h3>
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
