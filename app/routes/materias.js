const express = require("express");
const { check } = require("express-validator");
const router = express.Router();

// * MIDDLEWARES
const { validateFields } = require("../middlewares/validateFields");
const { validarToken, validarPermisos } = require("../middlewares/auth");

// * CONTROLLER
const materiaController = require("../controllers/MateriaController");


router.get("/", [validarToken, validarPermisos], materiaController.index);
router.post(
  "/",
  [
    validarToken,
    validarPermisos,
    check("nombre", "El nombre es Requerido").trim().escape().not().isEmpty(),
    check("sigla", "La sigla es Requerida").trim().escape().not().isEmpty(),
    validateFields,
  ],
  materiaController.create
);
router.put(
  "/:id",
  [
    validarToken,
    validarPermisos,
    check("nombre", "El nombre es Requerido").trim().escape().not().isEmpty(),
    check("sigla", "La sigla es Requerida").trim().escape().not().isEmpty(),
    validateFields,
  ],
  materiaController.update
);

router.get("/:id", [validarToken, validarPermisos], materiaController.show);

router.delete(
  "/:id",
  [validarToken, validarPermisos],
  materiaController.delete
);

module.exports = router;
