import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../../utils";
import { Link } from "react-router-dom";
import "./note.css";

const Note = ({ note }) => {
  return (
    <Link to={`/note/${note.id}`} className="note-item">
      <h3 className="note-item_title">{note.title}</h3>
      <p className="note-item_date">{showFormattedDate(note.createdAt)}</p>
      <p className="note-item_body">{note.body}</p>
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
