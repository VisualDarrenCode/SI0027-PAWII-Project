// controllers/tierListController.js
const TierList = require("../models/tierListModel");

// GET: Ambil semua data tier list
exports.getAllTierList = async (req, res) => {
  try {
    const data = await TierList.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Gagal mengambil data tier list", error: error.message });
  }
};

// GET: Ambil data tier list berdasarkan ID
exports.getTierListById = async (req, res) => {
  try {
    const data = await TierList.findOne({ id: req.params.id });
    if (!data) {
      return res.status(404).json({ message: "Data tier list tidak ditemukan" });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Kesalahan server", error: error.message });
  }
};

// POST: Tambah data tier list baru
exports.createTierList = async (req, res) => {
  try {
    const newData = new TierList(req.body);
    const savedData = await newData.save();
    res.status(201).json(savedData);
  } catch (error) {
    res.status(400).json({ message: "Gagal menambahkan data tier list", error: error.message });
  }
};

// PUT: Update data tier list berdasarkan ID
exports.updateTierList = async (req, res) => {
  try {
    const updatedData = await TierList.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedData) {
      return res.status(404).json({ message: "Data tier list tidak ditemukan untuk di-update" });
    }

    res.status(200).json(updatedData);
  } catch (error) {
    res.status(400).json({ message: "Gagal memperbarui data tier list", error: error.message });
  }
};

// DELETE: Hapus data tier list berdasarkan ID
exports.deleteTierList = async (req, res) => {
  try {
    const deletedData = await TierList.findOneAndDelete({ id: req.params.id });

    if (!deletedData) {
      return res.status(404).json({ message: "Data tier list tidak ditemukan untuk dihapus" });
    }

    res.status(200).json({
      message: "Tier list berhasil dihapus",
      data: deletedData,
    });
  } catch (error) {
    res.status(500).json({ message: "Gagal menghapus data tier list", error: error.message });
  }
};