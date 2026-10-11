// Solusi Referensi - Pertemuan 6-7: Layer Model (Fakultas)

let fakultas = [
  { id: 1, nama: "Fakultas Ilmu Komputer" },
  { id: 2, nama: "Fakultas Ekonomi" },
];

function getAll() {
  return fakultas;
}

function getById(id) {
  return fakultas.find((f) => f.id === id);
}

function create(data) {
  const baru = { id: fakultas.length + 1, ...data };
  fakultas.push(baru);
  return baru;
}

module.exports = { getAll, getById, create };