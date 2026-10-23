// controllers/karakterController.js
const Karakter = require("../models/karakterModel");

exports.getAll = async (req, res) => {
    try {
        const data = await Karakter.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getById = async (req, res) => {
    try {
        const data = await Karakter.findOne({ id: req.params.id });
        if (!data) {
            return res.status(404).json({ message: "Karakter Guardian Tales tidak ditemukan" });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.create = async (req, res) => {
    try {
        const karakterBaru = new Karakter(req.body);
        const saved = await karakterBaru.save();
        res.status(201).json(saved);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        const updated = await Karakter.findOneAndUpdate({ id: req.params.id }, req.body, { new: true, runValidators: true });
        if (!updated) {
            return res.status(404).json({ message: "Karakter tidak ditemukan untuk di-update" });
        }
        res.status(200).json(updated);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const deleted = await Karakter.findOneAndDelete({ id: req.params.id });
        if (!deleted) {
            return res.status(404).json({ message: "Karakter tidak ditemukan untuk dihapus" });
        }
        res.status(200).json({ message: "Karakter berhasil dihapus", data: deleted });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};