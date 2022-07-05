"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Profesor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Persona, {
        foreignKey: "idPersona",
      });
      
      this.hasMany(models.Curso, {
        foreignKey: "idProfesor",
      });
    }
  }
  Profesor.init(
    {
      idPersona: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Profesor",
    }
  );
  return Profesor;
};
