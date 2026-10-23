// controllers/karakterController.js
const karakterModel = require("../models/karakterModel");

exports.getAll = (req, res) => {
    try {
        const data = karakterModel.getAll();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getById = (req, res) => {
    try {
        const id = req.params.id;
        const data = karakterModel.getById(id);
        if (!data) {
            return res.status(404).json({ message: "Karakter Guardian Tales tidak ditemukan" });
        }
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.create = (req, res) => {
    try {
        const karakterBaru = karakterModel.create(req.body);
        res.status(201).json(karakterBaru);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.update = (req, res) => {
    try {
        const id = req.params.id;
        const updated = karakterModel.update(id, req.body);
        if (!updated) {
            return res.status(404).json({ message: "Karakter tidak ditemukan untuk di-update" });
        }
        res.json(updated);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.delete = (req, res) => {
    try {
        const id = req.params.id;
        const deleted = karakterModel.delete(id);
        if (!deleted) {
            return res.status(404).json({ message: "Karakter tidak ditemukan untuk dihapus" });
        }
        res.json({ message: "Karakter berhasil dihapus", data: deleted });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};