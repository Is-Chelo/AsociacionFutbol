const { Materia } = require("../models/index");

module.exports = {
  async index(req, res) {
    try {
      const response = await Materia.findAll({
        attributes: { exclude: ["createdAt", "updatedAt", "idProfesor"] },

      });
      res.status(200).json({
        response,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Error en la request",
      });
    }
  },
  async create(req, res) {
    try {
      const response = await Materia.create(req.body);
      res.status(200).json({
        response,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Error en la request",
      });
    }
  },

  async update(req, res) {
    // * no se podra actualizar la contraseña por ahora
    try {
      const idResponse = await Materia.findOne({
        where: {
          id: req.params.id,
        },
      });

      if (!idResponse) {
        return res.status(404).json({
          message: `El id ${req.params.id} no se encuentra en la DB`,
        });
      }
      await Materia.update(req.body, {
        where: { id: req.params.id },
      });
      res.status(201).json({
        message: "Materia Actualizada",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error en el servidor" });
    }
  },

  async delete(req, res) {
    try {
      const idResponse = await Materia.findOne({
        where: {
          id: req.params.id,
        },
        attributes: { exclude: ["createdAt", "updatedAt", "idProfesor"] },

      });
      if (!idResponse) {
        return res.status(404).json({
          message: `El id ${req.params.id} no se encuentra en la DB`,
        });
      }
      await Materia.destroy({ where: { id: req.params.id } });

      res.status(201).json({
        message: "El Materia se elimino correctamente",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error en el servidor" });
    }
  },

  async show(req, res) {
    try {
      const response = await Materia.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (!response)
        return res.status(404).json({
          message: `El Materia con el id ${req.params.id} no existe`,
        });
      res.status(200).json({
        response,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Error en la request",
      });
    }
  },
};
