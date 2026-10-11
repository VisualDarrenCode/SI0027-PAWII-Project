// Solusi Referensi - Pertemuan 6-7: Layer Route

const express = require("express");
const router = express.Router();
const mahasiswaController = require("../controllers/mahasiswaController");

router.get("/", mahasiswaController.getAll);
router.get("/:id", mahasiswaController.getById);
router.post("/", mahasiswaController.create);

module.exports = router;