const express = require("express");
const { check } = require("express-validator");
const router = express.Router();

// * MIDDLEWARES
const { validateFields } = require("../middlewares/validateFields");
const { validarToken, validarPermisos } = require("../middlewares/auth");

// * CONTROLLER
const cursosController = require("../controllers/CursosController");
const { idExistsInTable } = require("../helpers/db-validate");

// * MODELS
const { Profesor } = require("../models/index");

router.get("/", [validarToken, validarPermisos], cursosController.index);
router.post(
  "/",
  [
    validarToken,
    validarPermisos,
    check("nombre", "El nombre es Requerido").trim().escape().not().isEmpty(),
    check("paralelo", "El paralelo es Requerido")
      .trim()
      .escape()
      .not()
      .isEmpty(),
    check("nivel", "El nivel es Requerido").trim().escape().not().isEmpty(),
    check("idProfesor", "El Profesor es Requerido")
      .trim()
      .escape()
      .not()
      .isEmpty(),
    check("idProfesor").custom((id) => idExistsInTable(id, Profesor)),
    validateFields,
  ],
  cursosController.create
);
router.put(
  "/:id",
  [
    validarToken,
    validarPermisos,
    check("nombre", "El nombre es Requerido").trim().escape().not().isEmpty(),
    check("paralelo", "El paralelo es Requerido")
      .trim()
      .escape()
      .not()
      .isEmpty(),
    check("nivel", "El nivel es Requerido").trim().escape().not().isEmpty(),
    check("idProfesor", "El Profesor es Requerido")
      .trim()
      .escape()
      .not()
      .isEmpty(),
    check("idProfesor").custom((id) => idExistsInTable(id, Profesor)),
    validateFields,
  ],
  cursosController.update
);

router.get("/:id", [validarToken, validarPermisos], cursosController.show);

router.delete("/:id", [validarToken, validarPermisos], cursosController.delete);

module.exports = router;
