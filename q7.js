const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(express.json());

app.get('/api/books', (req, res) => {
  res.json([
    { id: 1, title: 'The Alchemist' },
    { id: 2, title: '1984' }
  ]);
});

app.listen(5000, () => {
  console.log('API running on port 5000');
});
