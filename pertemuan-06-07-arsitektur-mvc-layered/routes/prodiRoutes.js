// Solusi Referensi - Pertemuan 6-7: Layer Route (Prodi)

const express = require("express");
const router = express.Router();
const prodiController = require("../controllers/prodiController");

router.get("/", prodiController.getAll);
router.get("/:id", prodiController.getById);
router.post("/", prodiController.create);

module.exports = router;