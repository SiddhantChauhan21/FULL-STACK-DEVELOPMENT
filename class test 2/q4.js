const express = require('express');

const app = express();

app.use(express.json());

let books = [
  { id: 1, title: 'hindi', author: 'xyz' },
  { id: 2, title: 'english', author: 'Geor' }
];

// GET /api/books - list all books
app.get('/api/books', (req, res) => {
  res.json(books);
});

// POST /api/books - create a new book
app.post('/api/books', (req, res) => {
  const { title, author } = req.body;

  const newBook = {
    id: books.length ? books[books.length - 1].id + 1 : 1,
    title,
    author
  };

  books.push(newBook);

  res.status(201).json(newBook);
});

// DELETE /api/books/:id - delete a book
app.delete('/api/books/:id', (req, res) => {
  const id = Number(req.params.id);

  const index = books.findIndex(book => book.id === id);

  if (index === -1) {
    return res.status(404).json({
      error: 'Book not found'
    });
  }

  const deletedBook = books.splice(index, 1)[0];

  res.json(deletedBook);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
