const express = require("express");
const router = express.Router();
const tierListController = require("../controllers/tierListController");

// Definisi Endpoint Tier List
router.get("/", tierListController.getAllTierList);           // GET: Ambil semua data tier list
router.get("/:id", tierListController.getTierListById);     // GET: Ambil data tier list berdasarkan ID
router.post("/", tierListController.createTierList);          // POST: Tambah data tier list baru
router.put("/:id", tierListController.updateTierList);      // PUT: Update data tier list berdasarkan ID
router.delete("/:id", tierListController.deleteTierList);   // DELETE: Hapus data tier list berdasarkan ID

module.exports = router;