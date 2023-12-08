import React, { useState } from "react";
import styles from "./note-detail-actions.module.css";
import Button from "../Button";
import PropTypes from "prop-types";
import {
  archiveNote,
  deleteNote,
  unarchiveNote,
} from "../../utils/network-data";
import { useNavigate } from "react-router-dom";
import { useLangContext } from "../../contexts/LangContext";

const NoteDetailActions = ({ note }) => {
  const { lang } = useLangContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const text = {
    en: {
      unarchive: "Unarchive",
      archive: "Archive",
      delete: "Delete",
    },
    id: {
      unarchive: "Batal Arsip",
      archive: "Arsip",
      delete: "Hapus",
    },
  };

  return (
    <div className={styles.ndActions}>
      {note.archived ? (
        <Button
          onClick={() => {
            const requestUnarchive = async () => {
              try {
                setLoading(true);
                const { error } = await unarchiveNote(note.id);
                if (error) {
                  return;
                }
              } catch (error) {
                return;
              } finally {
                setLoading(true);

                // force rerender using random state
                navigate("/", { state: Date.now().toString() });
              }
            };
            requestUnarchive();
          }}
          isLoading={loading}
          variant="warning"
        >
          {text[lang].unarchive}
        </Button>
      ) : (
        <Button
          onClick={() => {
            const requestUnarchive = async () => {
              try {
                setLoading(true);
                const { error } = await archiveNote(note.id);
                if (error) {
                  return;
                }
              } catch (error) {
                return;
              } finally {
                setLoading(true);

                // force rerender using random state
                navigate("/", { state: Date.now().toString() });
              }
            };
            requestUnarchive();
          }}
          isLoading={loading}
        >
          {text[lang].archive}
        </Button>
      )}

      <Button
        variant="danger"
        onClick={() => {
          const requestUnarchive = async () => {
            try {
              setLoading(true);
              const { error } = await deleteNote(note.id);
              if (error) {
                return;
              }
            } catch (error) {
              return;
            } finally {
              setLoading(true);

              // force rerender using random state
              navigate("/", { state: Date.now().toString() });
            }
          };
          requestUnarchive();
        }}
        isLoading={loading}
      >
        {text[lang].delete}
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
};

export default NoteDetailActions;
