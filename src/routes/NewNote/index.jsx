import React, { useState } from "react";
import styles from "./new-note.module.css";
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
    <div className={styles.noteDetail}>
      <form className={styles.wrapper} onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          className={styles.titleInput}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Secret Note..."
          required
        />
        <textarea
          className={styles.bodyInput}
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
