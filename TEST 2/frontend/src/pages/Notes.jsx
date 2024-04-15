import NotesForm from "../components/Notes/NotesForm";
import NotesList from "../components/Notes/NotesList";
import { post, get } from "../utils/ApiRequests";
import { useState, useEffect } from "react";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    get("api/notes").then((response) => {
      setNotes(response.data);
    });
  }, []);

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      date: new Date().toISOString(), // Formato ISO para compatibilidad con SQL
    };

    post("api/notes", noteObject).then((response) => {
      console.log(response);
      setNotes(notes.concat(response.data));
      setNewNote("");
    });
  };

  return (
    <div>
      <NotesForm onSubmit={addNote} newNote={newNote} setNewNote={setNewNote} />
      <NotesList notes={notes} />
    </div>
  );
}

export default Notes;
