import propTypes from "prop-types";

function NotesList({ notes }) {
    // Revierte el orden de las notas para que la más reciente aparezca arriba
    const reversedNotes = [...notes].reverse();

    const listContainerStyle = {
        overflowY: "auto",
        width: "100%",
    };

    const listItemStyle = {
        color: "white",
    };

    return (
        <div style={listContainerStyle}>
            <ul>
                {reversedNotes.map((note) => (
                    <li style={listItemStyle} key={note.id}>
                        {note.content}
                    </li>
                ))}
            </ul>
        </div>
    );
}

NotesList.propTypes = {
    notes: propTypes.array.isRequired,
};

export default NotesList;
