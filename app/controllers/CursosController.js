const { Profesor, Persona, Curso } = require("../models/index");

module.exports = {
  async index(req, res) {
    try {
      const response = await Curso.findAll({
        include: [
          {
            model: Profesor,
            include: [
              {
                model: Persona,
                attributes: [
                  "nombre",
                  "apellidoPaterno",
                  "apellidoMaterno",
                  "telefono",
                ],
              },
            ],
            attributes: { exclude: ["createdAt", "updatedAt", "idPersona"] },
          },
        ],
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
      const response = await Curso.create(req.body);
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
      const idResponse = await Curso.findOne({
        where: {
          id: req.params.id,
        },
      });

      if (!idResponse) {
        return res.status(404).json({
          message: `El id ${req.params.id} no se encuentra en la DB`,
        });
      }
      await Curso.update(req.body, {
        where: { id: req.params.id },
      });
      res.status(201).json({
        message: "Curso Actualizado",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error en el servidor" });
    }
  },

  async delete(req, res) {
    try {
      const idResponse = await Curso.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (!idResponse) {
        return res.status(404).json({
          message: `El id ${req.params.id} no se encuentra en la DB`,
        });
      }
      await Curso.destroy({ where: { id: req.params.id } });

      res.status(201).json({
        message: "El Curso se elimino correctamente",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error en el servidor" });
    }
  },

  async show(req, res) {
    try {
      const response = await Curso.findOne({
        where: {
          id: req.params.id,
        },
        include: [
          {
            model: Profesor,
            include: [
              {
                model: Persona,
                attributes: [
                  "nombre",
                  "apellidoPaterno",
                  "apellidoMaterno",
                  "telefono",
                ],
              },
            ],
            attributes: { exclude: ["createdAt", "updatedAt", "idPersona"] },
          },
        ],
        attributes: { exclude: ["createdAt", "updatedAt", "idProfesor"] },
      });
      if (!response)
        return res.status(404).json({
          message: `El Curso con el id ${req.params.id} no existe`,
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
