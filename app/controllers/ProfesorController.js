const { Profesor, Persona } = require("../models/index");

module.exports = {
  async index(req, res) {
    try {
      const response = await Profesor.findAll({
        include: [
          {
            model: Persona,
            attributes: { exclude: ["clave", "createdAt", "updatedAt"] },
          },
        ],
        attributes: { exclude: ["createdAt", "updatedAt"] },
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
  async update(req, res) {
    // * no se podra actualizar la contraseña por ahora
    const { clave, ...resto } = req.body;
    try {
      const idResponse = await Profesor.findOne({
        where: {
          id: req.params.id,
        },
      });

      if (!idResponse) {
        return res.status(404).json({
          message: `El id ${req.params.id} no se encuentra en la DB`,
        });
      }
      const idPersona = idResponse.idPersona;
      const persona = await Persona.update(resto, {
        where: { id: idPersona },
      });
      if (!persona)
        res.status(401).json({
          message: "Profesor no encontrado",
        });

      res.status(201).json({
        message: "Profesor Actualizado",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error en el servidor" });
    }
  },

  async delete(req, res) {
    try {
      const idResponse = await Profesor.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (!idResponse) {
        return res.status(404).json({
          message: `El id ${req.params.id} no se encuentra en la DB`,
        });
      }
      await Profesor.destroy({ where: { id: req.params.id } })
      
      res.status(201).json({
        message: "El profesor se elimino correctamente",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error en el servidor" });
    }
  },

  async show(req, res) {
    try {
      const response = await Profesor.findOne({
        where: {
          id: req.params.id,
        },
        include: [
          {
            model: Persona,
            attributes: { exclude: ["clave", "createdAt", "updatedAt"] },
          },
        ],
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      if (!response)
        return res.status(404).json({
          message: `El profesor con el id ${req.params.id} no existe`,
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
