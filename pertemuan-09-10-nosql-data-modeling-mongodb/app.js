require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

// Import Routes GuardianMeta
const karakterRoutes = require("./routes/karakterRoutes");
const tierListRoutes = require("./routes/tierListRoutes");

// Middleware untuk parsing format JSON pada request body
app.use(express.json());

// Daftarkan Endpoint Routes
app.use("/api/karakter", karakterRoutes);
app.use("/api/tierlist", tierListRoutes);

// Konfigurasi Koneksi MongoDB & Menjalankan Server
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Terhubung ke MongoDB Atlas");
    app.listen(PORT, () => {
      console.log(`Server berjalan di http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Gagal terhubung ke MongoDB:", err.message);
    process.exit(1);
  }); 