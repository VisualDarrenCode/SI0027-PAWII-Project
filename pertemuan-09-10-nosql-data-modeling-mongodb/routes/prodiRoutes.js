

const express = require("express");
const router = express.Router();
const prodiController = require("../controllers/prodiController");

router.get("/", prodiController.getAll);
router.post("/", prodiController.create);

module.exports = router;