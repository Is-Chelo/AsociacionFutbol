"use strict";
const { rolesModulo } = require("../../models/index");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("modulos", modulos);
    
    for (let i = 1; i <= modulos.length; i++)
      await rolesModulo.create({
        idModulo: i,
        idRol: 1,
        okSelect: 1,
        okUpdate: 1,
        okInsert: 1,
        okDelete: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("modulos", null, {});
  },
};

const modulos = [
  {
    nombre: "Modulo Materias",
    url: "/api/v1/materias",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    nombre: "Modulo Profesores",
    url: "/api/v1/profesores",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    nombre: "Modulo Cursos",
    url: "/api/v1/cursos",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    nombre: "Modulo Horarios",
    url: "/api/v1/horarios",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    nombre: "Modulo Estudiantes",
    url: "/api/v1/estudiantes",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    nombre: "Modulo Calificaciones",
    url: "/api/v1/estudiantes",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    nombre: "Modulo Tutores",
    url: "/api/v1/tutores",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
