// Solusi Referensi - Pertemuan 6-7: Layer Model (Dosen)
// Relasi: dosen.prodiId -> prodi.id

let dosen = [
  { id: 1, nama: "Nur Rachmat, M.Kom.", nip: "161125", prodiId: 1 },
  { id: 2, nama: "Celvine Adi Putra, M.Kom.", nip: "252312", prodiId: 1 },
];

function getAll() {
  return dosen;
}

function getById(id) {
  return dosen.find((d) => d.id === id);
}

function create(data) {
  const baru = { id: dosen.length + 1, ...data };
  dosen.push(baru);
  return baru;
}

module.exports = { getAll, getById, create };