const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const port = 5050

// Middleware
app.use(cors())
app.use(bodyParser.json())

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',       // default XAMPP MySQL user
  password: '',       // kosong kalau default
  database: 'birthday_db'
})

db.connect((err) => {
  if (err) throw err
  console.log('Connected to MySQL database.')
})

// Create table if not exists
db.query(
  `CREATE TABLE IF NOT EXISTS wishes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT
  )`,
  (err) => {
    if (err) throw err
    console.log('Table wishes ready.')
  }
)

// Get all wishes
app.get('/wishes', (req, res) => {
  db.query('SELECT * FROM wishes', (err, results) => {
    if (err) return res.status(500).json({ error: err.message })
    res.json(results)
  })
})

// Add new wish
app.post('/wishes', (req, res) => {
  const { name, description } = req.body
  if (!name) return res.status(400).json({ error: 'Name is required' })

  db.query(
    'INSERT INTO wishes (name, description) VALUES (?, ?)',
    [name, description],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message })
      res.json({ id: result.insertId, name, description })
    }
  )
})

// Start server
app.listen(port, () => console.log(`Server running on http://localhost:${port}`))
