const express = require("express");
const app = express();

app.use(express.json());

const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};

app.use(requestLogger);

let notes = [
  {
    id: 1,
    content: "HTML is easy and complex at the same time",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are  methods of HTTP protocol",
    important: true,
  },
];

const generateId = () => {
  const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;
  return maxId + 1;
};

//Endpoints de la aplicacion

//root
app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

//API All Notes
app.get("/api/notes", (request, response) => {
  response.json(notes);
});

//API Single Note
app.get("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  console.log(id);
  const note = notes.find((note) => note.id === id);

  if (note) {
    response.json(note);
  } else {
    response.status(204).end();
  }
  console.log(note);
});

app.post("/api/notes", (request, response) => {
  const body = request.body;

  if (!body.content) {
    return response.status(400).json({
      error: "content missing",
    });
  }

  const note = {
    content: body.content,
    important: Boolean(body.important) || false,
    id: generateId(),
  };

  notes = notes.concat(note);

  response.json(note);
});

app.delete("/api/notes", (request, response) => {
  const body = request.body;

  if (!body.id) {
    return response.status(400).json({
      error: "id missing",
    });
  }

  // Filtrar las notas con todas aquellas excepto la que tenga el id recibido
  notes = notes.filter((note) => note.id !== body.id);

  response.json(notes);
});

app.put("/api/notes", (request, response) => {
  const body = request.body;

  if (!body.id) {
    return response.status(400).json({
      error: "id missing",
    });
  }

  // Buscar la nota con el id recibido
  const note = notes.find((note) => note.id === body.id);

  if (!note) {
    return response.status(400).json({
      error: "note not found",
    });
  }

  // Actualizar la nota
  note.content = body.content;
  note.important = body.important;

  response.json(note);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
