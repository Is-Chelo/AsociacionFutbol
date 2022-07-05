"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Persona extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // * relacion con roles
      this.belongsTo(models.Role, {
        foreignKey: "usuario",
      });

      this.hasMany(models.Profesor, {
        foreignKey: "idPersona",
      });
      this.hasMany(models.Tutor, {
        foreignKey: "idPersona",
      });
    }
  }
  Persona.init(
    {
      nombre: DataTypes.STRING,
      apellidoPaterno: DataTypes.STRING,
      apellidoMaterno: DataTypes.STRING,
      sexo: DataTypes.STRING,
      correo: DataTypes.STRING,
      fechaNacimiento: DataTypes.DATE,
      direccion: DataTypes.STRING,
      telefono: DataTypes.STRING,
      nroDip: DataTypes.INTEGER,
      fotografia: DataTypes.STRING,
      usuario: DataTypes.STRING,
      clave: DataTypes.STRING,
      idRol: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Persona",
    }
  );
  return Persona;
};
