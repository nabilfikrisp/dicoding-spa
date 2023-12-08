import React, { useState } from "react";
import styles from "./new-note.module.css";
import Button from "../../components/Button";
// import { addNote } from "../../utils/local-data";
import { addNote } from "../../utils/network-data";
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../../contexts/ThemeContext";
import { useLangContext } from "../../contexts/LangContext";

const NoteDetail = () => {
  const { lang } = useLangContext();
  const { theme } = useThemeContext();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);

  const text = {
    en: {
      titlePlaceholder: "Secret note...",
      bodyPlaceholder: "Secret is lorem...",
      create: "Create",
    },
    id: {
      titlePlaceholder: "Catatan rahasia...",
      bodyPlaceholder: "Rahasiaku adalah...",
      create: "Buat",
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { error } = await addNote({ title, body });
      if (error) {
        return;
      }
      setTitle("");
      setBody("");
      navigate("/");
    } catch (error) {
      return;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={[styles.noteDetail, styles[theme]].join(" ")}>
      <form className={styles.wrapper} onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          className={styles[`titleInput${theme}`]}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={text[lang].titlePlaceholder}
          required
        />
        <textarea
          className={[styles.bodyInput, styles[theme]].join(" ")}
          rows={10}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder={text[lang].bodyPlaceholder}
          required
        />
        <Button type="submit" isLoading={loading} variant="warning">
          {text[lang].create}
        </Button>
      </form>
    </div>
  );
};

export default NoteDetail;
