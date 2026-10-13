// Solusi Referensi - Pertemuan 6-7: Layer Route (Fakultas)

const express = require("express");
const router = express.Router();
const fakultasController = require("../controllers/fakultasController");

router.get("/", fakultasController.getAll);
router.get("/:id", fakultasController.getById);
router.post("/", fakultasController.create);

module.exports = router;