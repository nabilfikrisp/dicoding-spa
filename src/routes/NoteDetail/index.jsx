import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { editNote, getNote } from "../../utils/local-data";
import "./note-detail.css";
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
    <div className="note-detail">
      <div className="note-detail_wrapper">
        {isEditing ? (
          <form className="note-detail_wrapper">
            <input
              type="text"
              value={title}
              className="note-detail_title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <p className="note-detail_date">
              {showFormattedDate(note.createdAt)}
            </p>
            <textarea
              className="note-detail_body"
              rows={10}
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </form>
        ) : (
          <>
            <h2 className="note-detail_title">{title}</h2>
            <p className="note-detail_date">
              {showFormattedDate(note.createdAt)}
            </p>
            <p className="note-detail_body">{body}</p>
          </>
        )}
      </div>
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
