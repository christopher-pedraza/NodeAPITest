import NotesSubmit from "./NotesSubmit";
import NotesTextField from "./NotesTextField/NotesTextField";

import propTypes from "prop-types";

const formContainerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "20px",
};

const formStyle = {
    width: "100%",
};

function NotesForm({ onSubmit, newNote, setNewNote }) {
    // Evento de onChange que modifica un useState cada vez que el texto del
    // input se modifica
    const handleNoteChange = (event) => {
        setNewNote(event.target.value);
    };

    return (
        <div style={formContainerStyle}>
            <form onSubmit={onSubmit} style={formStyle}>
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
