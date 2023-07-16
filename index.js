const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

// Task 1: Get the book list available in the shop
app.get('/books', async (req, res) => {
    try {
        const response = await axios.get('https://api.example.com/books');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Task 2: Get the books based on ISBN
app.get('/books/isbn/:isbn', async (req, res) => {
    try {
        const { isbn } = req.params;
        const response = await axios.get(`https://api.example.com/books?isbn=${isbn}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Task 3: Get all books by Author
app.get('/books/author/:author', async (req, res) => {
    try {
        const { author } = req.params;
        const response = await axios.get(`https://api.example.com/books?author=${author}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Task 4: Get all books based on Title
app.get('/books/title/:title', async (req, res) => {
    try {
        const { title } = req.params;
        const response = await axios.get(`https://api.example.com/books?title=${title}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Task 5: Get book Review
app.get('/books/:id/review', async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.get(`https://api.example.com/books/${id}/review`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Task 6: Register New user
app.post('/users/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const response = await axios.post('https://api.example.com/users/register', { name, email, password });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Task 7: Login as a Registered user
app.post('/users/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const response = await axios.post('https://api.example.com/users/login', { email, password });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Task 8: Add/Modify a book review
app.put('/books/:id/review', async (req, res) => {
    try {
        const { id } = req.params;
        const { review } = req.body;
        const response = await axios.put(`https://api.example.com/books/${id}/review`, { review });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Task 9: Delete book review added by that particular user
app.delete('/books/:id/review', async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.delete(`https://api.example.com/books/${id}/review`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Task 10: Get all books - Using async callback function
app.get('/books/all', (req, res) => {
    axios.get('https://api.example.com/books')
        .then(response => {
            res.json(response.data);
        })
        .catch(error => {
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

// Task 11: Search by ISBN - Using Promises
app.get('/books/search/isbn/:isbn', (req, res) => {
    const { isbn } = req.params;
    axios.get(`https://api.example.com/books?isbn=${isbn}`)
        .then(response => {
            res.json(response.data);
        })
        .catch(error => {
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

// Task 12: Search by Author
app.get('/books/search/author/:author', async (req, res) => {
    try {
        const { author } = req.params;
        const response = await axios.get(`https://api.example.com/books?author=${author}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Task 13: Search by Title
app.get('/books/search/title/:title', async (req, res) => {
    try {
        const { title } = req.params;
        const response = await axios.get(`https://api.example.com/books?title=${title}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
