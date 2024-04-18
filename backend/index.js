require("dotenv").config();
const cors = require("cors");
const { Sequelize, Model, DataTypes } = require("sequelize");
const express = require("express");
const app = express();
const { testDb } = require("./testDB");

/* SWAGGER */
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const swaggerOptions = {
    explorer: true,
};
// Endpoint de la documentacio de swagger
app.use(
    "/api-docs",
    swaggerUI.serve,
    swaggerUI.setup(swaggerDocument, swaggerOptions)
);

//middelware json y cors
// Cuando llega una peticion, se interpreta como JSON
app.use(express.json());
app.use(cors());

const sequelize = new Sequelize(process.env.DATABASE_URL);

//Declaracion del Modelo (tablas de la DB)

class Note extends Model {}
Note.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        important: {
            type: DataTypes.BOOLEAN,
        },
        date: {
            type: DataTypes.DATE,
        },
    },
    {
        sequelize,
        underscored: true,
        timestamps: false,
        modelName: "note",
    }
);
// Inicializar tabla si no existe en la DB
Note.sync();

app.get("/api/notes", async (req, res) => {
    /*
      #swagger.tags = ['Notes']
      #swagger.description = 'Endpoint para obtener todas las notas'
    */
    const notes = await Note.findAll();
    //   const notes = await query("SELECT * FROM notes");
    //console.log(notes.map(n=>n.toJSON()))
    res.json(notes);
});

//endpoint create note
app.post("/api/notes", async (req, res) => {
    /*
      #swagger.tags = ['Notes']
    */
    const { content, important } = req.body;
    data = { content: content, important: important, data: new Date() };
    const note = await Note.create(data);
    res.json(note);
});

// Obtener una nota
app.get("/api/notes/:id", async (req, res) => {
    /*
      #swagger.tags = ['Notes']
    */
    const note = await Note.findByPk(req.params.id);
    if (note) {
        console.log(note.toJSON());
        res.json(note);
    } else {
        res.status(404).end();
    }
});

// Borrar una nota
app.delete("/api/notes/:id", async (req, res) => {
    /*
      #swagger.tags = ['Notes']
    */
    await Note.destroy({
        where: {
            id: req.params.id,
        },
    });
    res.status(204).end();
});

// Actualizar una nota
app.put("/api/notes/:id", async (req, res) => {
    /*
      #swagger.tags = ['Notes']
    */
    const { content, important } = req.body;
    const note = await Note.findByPk(req.params.id);
    if (note) {
        note.content = content;
        note.important = important;
        await note.save();
        res.json(note);
    } else {
        res.status(404).end();
    }
});

const PORT = process.env.PORT || 3001;

const start = async () => {
    await testDb();
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

start();
