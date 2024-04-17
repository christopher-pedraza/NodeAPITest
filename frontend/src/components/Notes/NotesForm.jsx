import NotesSubmit from "./NotesSubmit/NotesSubmit";
import NotesTextField from "./NotesTextField/NotesTextField";

import propTypes from "prop-types";

const formContainerStyle = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginBottom: "20px",
};

function NotesForm({ onSubmit, newNote, setNewNote }) {
    // Evento de onChange que modifica un useState cada vez que el texto del
    // input se modifica
    const handleNoteChange = (event) => {
        setNewNote(event.target.value);
    };

    return (
        <div style={formContainerStyle}>
            <form onSubmit={onSubmit}>
                <NotesTextField value={newNote} onChange={handleNoteChange} />
                <NotesSubmit text="Salvar" />
            </form>
        </div>
    );
}

NotesForm.propTypes = {
    onSubmit: propTypes.func.isRequired,
    newNote: propTypes.string.isRequired,
    setNewNote: propTypes.func.isRequired,
};

export default NotesForm;
