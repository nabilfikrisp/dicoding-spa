import React, { useState } from "react";
import "./new-note.css";
import Button from "../../components/Button";
import { addNote } from "../../utils/local-data";
import { useNavigate } from "react-router-dom";

const NoteDetail = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote({ title, body });
    setTitle("");
    setBody("");
    navigate("/");
  };

  return (
    <div className="note-detail">
      <form className="note-detail_wrapper" onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          className="note-detail_title_input"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Secret Note..."
          required
        />
        <textarea
          className="note-detail_body_input"
          rows={10}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Secret is lorem..."
          required
        />
        <Button type="submit">Create</Button>
      </form>
    </div>
  );
};

export default NoteDetail;
