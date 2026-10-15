

const mongoose = require("mongoose");

const prodiSchema = new mongoose.Schema({
  nama: { type: String, required: true },
  jenjang: { type: String, default: "S1" },
});

module.exports = mongoose.model("Prodi", prodiSchema);