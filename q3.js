const express = require('express');

const app = express();

function requireAuth(req, res, next) {
  const token = req.headers['x-auth-token'];

  if (!token) {
    return res.status(401).json({
      error: 'Unauthorized'
    });
  }

  next();
}

// Public route
app.get('/api/books', (req, res) => {
  res.json([
    { id: 1, title: 'Book One' },
    { id: 2, title: 'Book Two' }
  ]);
});

// Protected route
app.post('/api/books', requireAuth, (req, res) => {
  res.json({ message: 'Book created' });
});
app.listen(3001, () => {
    console.log('Server running on port 3001');
});

