"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Roles", [
      {
        nombre: "Director",
        activo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Profesor",
        activo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Estudiante",
        activo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Roles", null, {});
  },
};
