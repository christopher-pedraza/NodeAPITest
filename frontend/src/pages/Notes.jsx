import NotesForm from "../components/Notes/NotesForm";
import NotesList from "../components/Notes/NotesList";
import Title from "../components/General/Title";
import { post, get } from "../utils/ApiRequests";
import { useState, useEffect } from "react";

function Notes() {
    // Se utiliza un estado para guardar las notas que se obtienen del backend.
    // Guardarlas en un estado permite que se actualice la vista cuando se
    // agregue una nueva nota
    const [notes, setNotes] = useState([]);
    // Se utiliza un estado para guardar la nueva nota que se va a agregar. Esta
    // se va a ir modificando a medida que el usuario escriba en el formulario
    // usando un evento onChange
    const [newNote, setNewNote] = useState("");

    // Se esta utilizando un useEffect para que se ejecute la peticion GET al cargar la pagina
    useEffect(() => {
        get("api/notes")
            .then((response) => {
                setNotes(response.data);
            })
            .catch((error) => {
                console.log(`Error: ${error}`);
            });
    }, []);

    // Función para agregar una nota a la base de datos
    // Esta es la accion que se va a ejecutar cuando se envie el formulario
    // Declararla aqui permite tener varios formularios en esta misma pagina con distintas acciones
    const addNote = (event) => {
        event.preventDefault();
        // Si la nota esta vacía se muestra un mensaje de alerta para prevenir
        // agregar notas vacías
        if (newNote === "") {
            alert("La nota no puede estar vacía");
            return;
        }
        // Se previene el comportamiento por defecto del formulario que es recargar la página
        // Objeto que se enviará al backend con los datos de la nota
        const noteObject = {
            content: newNote,
            important: Math.random() < 0.5,
            date: new Date().toISOString(), // Formato ISO para compatibilidad con SQL
        };

        // Se mandan los datos al backend usando una petición POST
        post("api/notes", noteObject)
            .then((response) => {
                console.log(response);
                setNotes(notes.concat(response.data));
                setNewNote("");
            })
            .catch((error) => {
                console.log(`Error: ${error}`);
            });
    };

    const pageStyle = {
        display: "flex",
        flexDirection: "column",
        // Alinea horizontalmente
        alignItems: "center",
        // Alinea verticalmente
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
    };

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        // Alinea horizontalmente
        alignItems: "center",
        padding: "20px",
        width: "80vw",
        height: "70vh",
        /*Los siguientes estilos son de https://css.glass */
        background: "rgba(255, 255, 255, 0.32)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(7.9px)",
        border: "1px solid rgba(255, 255, 255, 0.61)",
        overflow: "hidden",
    };

    return (
        <div style={pageStyle}>
            <Title title="Notas" />
            <div style={containerStyle}>
                <NotesForm
                    onSubmit={addNote}
                    newNote={newNote}
                    setNewNote={setNewNote}
                />
                <NotesList notes={notes} />
            </div>
        </div>
    );
}

export default Notes;
