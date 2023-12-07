import React from "react";
import styles from "./note-detail-actions.module.css";
import Button from "../Button";
import PropTypes from "prop-types";
import { archiveNote, deleteNote, unarchiveNote } from "../../utils/local-data";
import { useNavigate } from "react-router-dom";

const NoteDetailActions = ({ note, setIsEditing, isEditing, onSaveClick }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.ndActions}>
      {!isEditing ? (
        <Button
          variant="action"
          onClick={() => {
            setIsEditing(!isEditing);
          }}
        >
          Edit
        </Button>
      ) : (
        <Button
          variant="success"
          onClick={() => {
            onSaveClick();
            setIsEditing(!isEditing);
          }}
        >
          Save
        </Button>
      )}

      {note.archived ? (
        <Button
          onClick={() => {
            unarchiveNote(note.id);
            navigate("/");
          }}
          variant="warning"
        >
          Unarchive
        </Button>
      ) : (
        <Button
          onClick={() => {
            archiveNote(note.id);
            navigate("/");
          }}
        >
          Archive
        </Button>
      )}

      <Button
        variant="danger"
        onClick={() => {
          deleteNote(note.id);
          navigate("/");
        }}
      >
        Delete
      </Button>
    </div>
  );
};

NoteDetailActions.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
  }).isRequired,
  setIsEditing: PropTypes.func,
  isEditing: PropTypes.bool,
  onSaveClick: PropTypes.func,
};

export default NoteDetailActions;
