const express = require('express');
const bcrypt = require('bcrypt');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Setup DB
const db = new sqlite3.Database('./users.db');
db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY,
  username TEXT UNIQUE,
  password TEXT
  )`);

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

// Register Route
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 10);

  db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, hash], (err) => {
    if (err) {
      return res.send('Username already exists.');
    }
    res.redirect('/login.html');
  });
});

// Login Route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  db.get('SELECT * FROM users WHERE username = ?', [username], async (err, user) => {
    if (err || !user) return res.send('Invalid credentials');

    const match = await bcrypt.compare(password, user.password);
    if (match) {
      res.redirect('/index.html');
    } else {
        res.send('Invalid credentials');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});