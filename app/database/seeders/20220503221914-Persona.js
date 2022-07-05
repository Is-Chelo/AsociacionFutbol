"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("personas", [
      {
        nombre: "John",
        apellidoPaterno: "Cena",
        apellidoMaterno: "De Noche",
        sexo: "Masculino",
        correo: "johncena@gmail.com",
        fechaNacimiento: null,
        direccion: "Av. Siempre Viva",
        telefono: "76565432",
        usuario: "Direc",
        clave: "$2b$10$5ugSCFhmVIrZGxG9K.kQZuvA8ciXSnT8zC434FCP05.QRuw8fHLqa",
        idRol: 1,
      },
    ]);

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("personas", null, {});
  },
};
