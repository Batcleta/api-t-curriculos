require("dotenv/config");
const express = require("express");
const cors = require("cors");

const app = express();
const routes = express.Router();

// const Model = require("./src/models/index");
// Model.Vaga.sync();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT;

// Rotas
require("./src/routes/Routes")(app, routes);

app.listen(port, () => {
  console.log(`Servidor rodando de boas na porta ${port}`);
});
