// Controllers
const Vaga = require("../controller/Vaga");

// Rotas

module.exports = (app, routes) => {
  // teste
  routes.get("/teste", () => {
    resizeBy.status(200).json({ message: "server is ok" });
  });

  // Create
  routes.post("/vagas", Vaga.store);

  // Find
  routes.get("/vagas", Vaga.findAll);
  routes.get("/vaga/:uuid", Vaga.findOne);

  // Update

  // Delete

  app.use("/api", routes);
};
