// Conectar la app con las variables de entorno
require("dotenv").config();
// Gestionar las conexiones seguras
const cors = require("cors");
// Mapear una tabla de una base de datos a un objeto de JavaScript y cuando se
// opere con ese objeto de JS, se estará operando con la base de datos
const { Sequelize, QueryTypes } = require("sequelize");

const express = require("express");
const app = express();

// Utilizar de esta forma solo en la estapa de desarrollo
// Esto permite que cualquiera pueda hacer peticiones a la API
app.use(cors());

const sequelize = new Sequelize(process.env.DATABASE_URL);

app.get("/api/notes", async (req, res) => {
  const notes = await sequelize.query("SELECT * FROM notes", {
    type: QueryTypes.SELECT,
  });
  res.json(notes);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
