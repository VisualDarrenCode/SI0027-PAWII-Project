

const Mahasiswa = require("../models/mahasiswaModel");

exports.getAll = async (req, res) => {
  const data = await Mahasiswa.find().populate("prodiId");
  res.json(data);
};

exports.getById = async (req, res) => {
  const data = await Mahasiswa.findById(req.params.id).populate("prodiId");
  if (!data) return res.status(404).json({ message: "Tidak ditemukan" });
  res.json(data);
};

exports.create = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.create(req.body);
    res.status(201).json(mahasiswa);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const data = await Mahasiswa.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!data) return res.status(404).json({ message: "Tidak ditemukan" });
    res.json(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.remove = async (req, res) => {
  const data = await Mahasiswa.findByIdAndDelete(req.params.id);
  if (!data) return res.status(404).json({ message: "Tidak ditemukan" });
  res.status(204).send();
};