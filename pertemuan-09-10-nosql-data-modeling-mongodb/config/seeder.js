require("dotenv").config();

const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const mongoose = require("mongoose");
const Karakter = require("../models/karakterModel");
const TierList = require("../models/tierListModel"); // Import model TierList

const karakterSeedData = [
  { id: 1, nama: "Future Princess", elemen: "Light", role: "Tank", senjata: "Liberator" },
  { id: 2, nama: "Beth", elemen: "Dark", role: "Warrior", senjata: "Predator" },
  { id: 3, nama: "Kamael", elemen: "Earth", role: "Support", senjata: "Equinox" }
];

const tierListSeedData = [
  { 
    id: 1, 
    namaHero: "Future Princess", 
    tierColosseum: "S+", 
    tierGuildRaid: "S", 
    tierArena: "S+", 
    keteranganBuild: "Aksesoris Little Black Notebook / Mirror Ring" 
  },
  { 
    id: 2, 
    namaHero: "Beth", 
    tierColosseum: "S", 
    tierGuildRaid: "S+", 
    tierArena: "S+", 
    keteranganBuild: "Aksesoris Minotaur's Necklace" 
  },
  { 
    id: 3, 
    namaHero: "Kamael", 
    tierColosseum: "S+", 
    tierGuildRaid: "S+", 
    tierArena: "S+", 
    keteranganBuild: "Aksesoris Sharp Shooter" 
  }
];

const seedDatabase = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI belum diatur di file .env");
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Terhubung ke MongoDB Atlas");

    // Bersihkan data lama
    await Karakter.deleteMany({});
    await TierList.deleteMany({});

    // Masukkan data baru ke database
    const insertedKarakter = await Karakter.insertMany(karakterSeedData);
    const insertedTierList = await TierList.insertMany(tierListSeedData);

    console.log(`Seeder Karakter berhasil: ${insertedKarakter.length} data masuk`);
    console.log(`Seeder TierList berhasil: ${insertedTierList.length} data masuk`);
  } catch (error) {
    console.error("Gagal melakukan seeding database:", error.message);
  } finally {
    await mongoose.disconnect();
    console.log("Koneksi MongoDB ditutup");
  }
};

seedDatabase();