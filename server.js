const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const app = express();
const port = 3001;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'practice'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

app.post('/register', async (req, res) => {
  const { username, name, password, phoneNumber } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = 'INSERT INTO users (username, name, password, phoneNumber) VALUES (?, ?, ?, ?)';
    db.query(query, [username, name, hashedPassword, phoneNumber], (err, result) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ message: 'Error registering user', error: err });
      }
      res.status(201).json({ message: 'User registered successfully' });
    });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ message: 'Server error', error });
  }
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const query = 'SELECT * FROM users WHERE username = ?';
  db.query(query, [username], async (err, results) => {
    if (err) return res.status(500).json({ message: 'Error logging in' });
    if (results.length === 0) return res.status(401).json({ message: 'User not found' });
    
    const user = results[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).json({ message: 'Invalid credentials' });
    
    res.status(200).json({ message: 'Login successful', user });
  });
});

app.get('/data', (req, res) => {
  const query = 'SELECT * FROM users';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
