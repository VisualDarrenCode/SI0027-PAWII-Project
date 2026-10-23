// models/tierListModel.js
const mongoose = require("mongoose");

const tierListSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true },
    namaHero: { type: String, required: true },
    tierColosseum: { type: String, required: true },
    tierGuildRaid: { type: String, required: true },
    tierArena: { type: String, required: true },
    keteranganBuild: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TierList", tierListSchema);