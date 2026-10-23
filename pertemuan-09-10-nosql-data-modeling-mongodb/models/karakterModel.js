// models/karakterModel.js
const mongoose = require("mongoose");

const karakterSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true },
    nama: { type: String, required: true },
    elemen: { type: String, required: true },
    role: { type: String, required: true },
    senjata: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Karakter", karakterSchema);