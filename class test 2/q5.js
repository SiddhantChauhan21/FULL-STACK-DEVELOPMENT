const express = require('express');

const app = express();

const books = [
    { id: 1, title: 'The Alchemist', author: 'Paulo Coelho' },
    { id: 2, title: '1984', author: 'George Orwell' }
];

app.get('/api/books/:id', (req, res) => {
    const id = Number(req.params.id);

    const book = books.find(b => b.id === id);

    if (!book) {
        return res.status(404).json({
            error: 'Book not found'
        });
    }

    res.json(book);
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
});
