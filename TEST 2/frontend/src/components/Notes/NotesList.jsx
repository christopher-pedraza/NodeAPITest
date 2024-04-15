import propTypes from "prop-types";

function NotesList({ notes }) {
  const reversedNotes = [...notes].reverse();

  return (
    <ul>
      {reversedNotes.map((note) => (
        <li key={note.id}>{note.content}</li>
      ))}
    </ul>
  );
}

NotesList.propTypes = {
  notes: propTypes.array.isRequired,
};

export default NotesList;
