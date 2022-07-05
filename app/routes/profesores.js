const express = require("express");
const { check } = require("express-validator");
const router = express.Router();

// * MIDDLEWARES
const { validateFields } = require("../middlewares/validateFields");
const { validarToken, validarPermisos } = require("../middlewares/auth");

// * CONTROLLER
const profesorController = require("../controllers/ProfesorController");

router.get("/", [validarToken, validarPermisos], profesorController.index);
router.put(
  "/:id",
  [
    validarToken,
    validarPermisos,
    check("nombre", "El nombre es Requerido").trim().escape().not().isEmpty(),
    check("correo", "El correo es Requerido").trim().escape().not().isEmpty(),
    check("correo", "El correo debe tener un formato correcto")
      .trim()
      .escape()
      .isEmail(),
    check("apellidoPaterno", "El Apellido Paterno es Requerido")
      .trim()
      .escape()
      .optional({ nullable: true }),
    check("apellidoMaterno", "El Apellido Materno es Requerido")
      .trim()
      .escape()
      .optional({ nullable: true }),
    check("usuario", "El usuario es requerido").trim().escape().not().isEmpty(),

    check("sexo", "Los valores admitidos son Masculino, Femenino")
      .isIn(["Masculino", "Femenino"])
      .optional({ nullable: true }),
    validateFields,
  ],
  profesorController.update
);

router.get("/:id", [validarToken, validarPermisos], profesorController.show);

router.delete(
  "/:id",
  [validarToken, validarPermisos],
  profesorController.delete
);

module.exports = router;
