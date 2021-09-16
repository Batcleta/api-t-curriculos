"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Vaga extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Vaga.init(
    {
      uuid: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      vagaEmpresa: DataTypes.STRING,
      vagaNome: DataTypes.STRING,
      vagaDataLimite: DataTypes.DATE,
      vagaDescr: DataTypes.STRING,
      vagaRequerIdade: DataTypes.BOOLEAN,
      minIdade: DataTypes.STRING,
      maxIdade: DataTypes.STRING,
      requerExperiencia: DataTypes.BOOLEAN,
      tempoExperiencia: DataTypes.STRING,
      resideProximo: DataTypes.BOOLEAN,
      regimeContrato: DataTypes.STRING,
      periodoVaga: DataTypes.STRING,
      vagaSalario: DataTypes.BOOLEAN,
      salarioInicial: DataTypes.STRING,
      salarioLimite: DataTypes.STRING,
      vagaRequerCapacitacao: DataTypes.BOOLEAN,
      cursoCapacitacao: DataTypes.STRING,
      vagaRequerHabilitacao: DataTypes.BOOLEAN,
      vagaHabilitação: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Vaga",
    }
  );
  return Vaga;
};
