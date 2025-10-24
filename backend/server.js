import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./connection.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = 5050;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// ✅ GET - Ambil semua wishes
app.get("/wishes", (req, res) => {
  const sql = "SELECT * FROM wishes ORDER BY created_at DESC";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// ✅ POST - Tambah wish baru
app.post("/wishes", (req, res) => {
  const { name, message, rating, photo } = req.body;
  const sql = "INSERT INTO wishes (name, message, rating, photo) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, message, rating, photo], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Wish added successfully!" });
  });
});

// ✅ DELETE - Hapus wish (opsional)
app.delete("/wishes/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM wishes WHERE id = ?";
  db.query(sql, [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Wish deleted successfully!" });
  });
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
