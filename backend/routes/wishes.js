import express from 'express';
const router = express.Router();
import db from '../db/connection.js';

// GET all wishes
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM wishes ORDER BY created_at DESC');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST new wish
router.post('/', async (req, res) => {
  try {
    const { name, message, rating, photo } = req.body;
    const [result] = await db.query(
      'INSERT INTO wishes (name, message, rating, photo) VALUES (?, ?, ?, ?)',
      [name, message, rating || null, photo || null]
    );
    const [rows] = await db.query('SELECT * FROM wishes WHERE id = ?', [result.insertId]);
    res.status(201).json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
