// Solusi Referensi - Pertemuan 6-7: Layer Controller

const mahasiswaModel = require("../models/mahasiswaModel");

exports.getAll = (req, res) => {
  res.json(mahasiswaModel.getAll());
};

exports.getById = (req, res) => {
  const id = parseInt(req.params.id);
  const data = mahasiswaModel.getById(id);
  if (!data) return res.status(404).json({ message: "Tidak ditemukan" });
  res.json(data);
};

exports.create = (req, res) => {
  const baru = mahasiswaModel.create(req.body);
  res.status(201).json(baru);
};