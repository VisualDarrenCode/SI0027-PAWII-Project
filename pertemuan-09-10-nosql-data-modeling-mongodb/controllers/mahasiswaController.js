// Mini Project - Pertemuan 9-10: Controller Mahasiswa
// TODO 2: lengkapi setiap handler agar memanggil Model Mongoose yang sesuai.

const mahasiswaModel = require("../models/mahasiswaModel");
const Mahasiswa = require("../models/mahasiswaModel");

exports.getAll = async (req, res) => {
  const data = await Mahasiswa.find();
  res.json(data);
}

exports.getById = async (req, res) => {
  const data = await Mahasiswa.findById(req.params.id);
  if (!data) return res.status(404).json({ pesan: 'Tidak ditemukan' });
  res.json(data);

};

exports.create = async (req, res) => {
  // TODO: buat data baru dengan Mahasiswa.create(req.body), bungkus try/catch
  // kirim response dengan status 201, atau 400 jika validasi gagal
};

exports.update = async (req, res) => {
const data = await Mahasiswa.findByIdAndUpdate(
    req.params.id, req.body, { new: true, runValidators: true }
  );
  res.json(data);

};

exports.remove = async (req, res) => {

  await Mahasiswa.findByIdAndDelete(req.params.id);
  res.status(204).send();

};
