import NotesSubmit from "./NotesSubmit/NotesSubmit";
import NotesTextField from "./NotesTextField/NotesTextField";

import propTypes from "prop-types";

function NotesForm({ onSubmit, newNote, setNewNote }) {
  const handleNoteChange = (event) => {
    console.log("New Note: " + event.target.value);
    setNewNote(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <NotesTextField value={newNote} onChange={handleNoteChange} />
      <NotesSubmit text="Salvar" />
    </form>
  );
}

NotesForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
  newNote: propTypes.string.isRequired,
  setNewNote: propTypes.func.isRequired,
};

export default NotesForm;
