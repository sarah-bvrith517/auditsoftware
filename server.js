const express = require('express');
const app = express();
const PORT = 5000;

// To parse JSON from requests
app.use(express.json());

// In-memory users (for demo only)
let users = [];

// Root route
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Sign-up route
app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  // Check if user already exists
  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    return res.status(400).json({ message: 'Username already exists' });
  }

  // Store the user (in plain text for simplicity — not secure!)
  users.push({ username, password });

  res.status(201).json({ message: 'User registered successfully' });
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Find the user
  const user = users.find(user => user.username === username && user.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  res.status(200).json({ message: 'Login successful' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
