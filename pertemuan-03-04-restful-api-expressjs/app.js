// Solusi Referensi - Pertemuan 3-4: RESTful API CRUD dengan Express.js
// Entitas: mahasiswa (id, nama, jurusan)

const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let mahasiswa = [
  { id: 1, nama: "Andi", jurusan: "Sistem Informasi" },
  { id: 2, nama: "Budi", jurusan: "Informatika" },
];

app.get("/mahasiswa", (req, res) => {
  res.json(mahasiswa);
});

app.get("/mahasiswa/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const data = mahasiswa.find((m) => m.id === id);
  if (!data) return res.status(404).json({ message: "Data tidak ditemukan" });
  res.json(data);
});

app.post("/mahasiswa", (req, res) => {
  const { nama, jurusan } = req.body;
  const baru = {
    id: mahasiswa.length + 1,
    nama,
    jurusan,
  };
  mahasiswa.push(baru);
  res.status(201).json(baru);
});

app.put("/mahasiswa/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = mahasiswa.findIndex((m) => m.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Data tidak ditemukan" });
  }

  mahasiswa[index] = { ...mahasiswa[index], ...req.body };
  res.json(mahasiswa[index]);
});

app.delete("/mahasiswa/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = mahasiswa.findIndex((m) => m.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Data tidak ditemukan" });
  }

  mahasiswa.splice(index, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});