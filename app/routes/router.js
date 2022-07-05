const express = require("express");
const router = express.Router();

// * AUTH
router.use("/auth", require("./auth"));

// * SISTEMA
router.use("/profesores", require("./profesores"));
router.use("/tutores", require("./tutores"));
router.use("/cursos", require("./cursos"));
router.use("/materias", require("./materias"));

// EXAMPLE
// router.use("/profesores", [validarToken, validarPermisos], (req, res) => {
//   res.send("hola");
// });

module.exports = router;
