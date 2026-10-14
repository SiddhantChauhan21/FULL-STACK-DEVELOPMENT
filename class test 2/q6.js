import React, { useEffect, useState } from 'react';

function BookList() {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('http://localhost:3001/api/books')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch books');
                }
                return response.json();
            })
            .then(data => {
                setBooks(data);
            })
            .catch(err => {
                setError(err.message);
            });
    }, []);

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h2>Book List</h2>

            {books.length === 0 ? (
                <p>No books available.</p>
            ) : (
                <ul>
                    {books.map(book => (
                        <li key={book.id}>
                            <strong>{book.title}</strong> - {book.author}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default BookList;
