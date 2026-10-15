# Pertemuan 6-7 - Arsitektur Backend Terstruktur (MVC/Layered)

Mini-project pendamping untuk materi slide `Materi-Pertemuan-06-07-Arsitektur-MVC-Layered.pptx`.

## Tujuan

Merefactor RESTful API `mahasiswa` (dari Pertemuan 3-4) dari satu file `app.js` menjadi struktur berlapis: **Route - Controller - Model**. Starter ini hanya mencakup modul `mahasiswa`; solusi referensi memperluasnya dengan modul `Fakultas`, `Prodi`, `Dosen` mengikuti pola yang sama.

## Struktur

```
pertemuan-06-07-arsitektur-mvc-layered/
├── app.js
├── routes/mahasiswaRoutes.js
├── controllers/mahasiswaController.js
└── models/mahasiswaModel.js
```

## Pemetaan Layer

| Layer | Contoh File | Tanggung Jawab |
|---|---|---|
| Route | `routes/mahasiswaRoutes.js` | Mendefinisikan endpoint & HTTP method |
| Controller | `controllers/mahasiswaController.js` | Menangani logika request-response |
| Model | `models/mahasiswaModel.js` | Mengelola struktur & akses data |

## Mengerjakan

Lengkapi setiap `// TODO` pada `models/mahasiswaModel.js`, `controllers/mahasiswaController.js`, `routes/mahasiswaRoutes.js`, dan `app.js` sesuai urutan (Model → Controller → Route → app.js).

```bash
npm install
npm start
# server berjalan di http://localhost:3000
```

```bash
curl http://localhost:3000/mahasiswa
```

Bandingkan hasilnya dengan modul `mahasiswa` pada solusi referensi di repositori terpisah [SI0027-PAWII-Solution](https://github.com/nurrachmat-nr/SI0027-PAWII-Solution) (di sana tersedia juga modul `fakultas`, `prodi`, `dosen`) setelah selesai.

## Kaitan dengan Tugas Project Mandiri (Kuis 1)

Tugas Project Mandiri pada slide materi meminta Anda untuk:

1. Merefactor RESTful API **project akhir Anda sendiri** menjadi struktur MVC/Layered.
2. Menambahkan 3 modul baru — `Prodi`, `Fakultas`, dan `Dosen` — masing-masing dengan file model, controller, dan route sendiri.

**Catatan penting:** solusi referensi pada repositori [SI0027-PAWII-Solution](https://github.com/nurrachmat-nr/SI0027-PAWII-Solution) mendemonstrasikan pola lengkap di atas (termasuk keempat modul beserta relasinya) menggunakan data akademik contoh sebagai referensi cara menyusun layer dan relasi antar modul. Ini **bukan pengganti** pengerjaan Tugas Project Mandiri Anda — tugas tetap harus diterapkan pada entitas dan basis kode **project akhir Anda sendiri** (bukan menyalin domain "mahasiswa/prodi/fakultas/dosen" ini), lalu dikumpulkan secara terpisah sebagai persiapan Kuis 1.
