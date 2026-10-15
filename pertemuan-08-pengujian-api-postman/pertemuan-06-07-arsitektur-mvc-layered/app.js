const express = require('express');
const app = express();

// Middleware wajib agar Express bisa membaca body bertipe JSON dari Postman
app.use(express.json());

// Import Routes Karakter GuardianMeta
const karakterRoutes = require('./routes/karakterRoutes');
app.use('/api', karakterRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server GuardianMeta berjalan di port ${PORT}`);
});