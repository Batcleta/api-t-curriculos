const { Vaga } = require("../models/index");

module.exports = {
  store(req, res) {
    const data = { ...req.body };

    const vagas = Vaga.create(data)
      .then((data) => res.status(200).json(data))
      .catch((err) => res.send(err.message));
  },

  findAll(req, res) {
    const vagas = Vaga.findAll()
      .then((data) => res.status(200).json(data))
      .catch((err) => res.send(err.message));
  },

  findOne(req, res) {
    const { uuid } = req.params;

    const vagas = Vaga.findAll({
      where: {
        uuid: uuid,
      },
    })
      .then((data) => res.status(200).json(data))
      .catch((err) => res.send(`Deu ruim ${err.message}`));
  },
  update(req, res) {},
  delete(req, res) {},
};
