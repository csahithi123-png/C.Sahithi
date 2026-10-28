
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Home endpoint
app.get('/', (req, res) => {
    res.status(200).send('Welcome to my BDF Lab 1 server!');
});

// About endpoint
app.get('/about', (req, res) => {
    res.status(200).json({
        name: 'C. Sahithi',
        section: 'S15'
    });
});

// Date and time endpoint
app.get('/time', (req, res) => {
    res.status(200).json({
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()
    });
});

// Handle unknown endpoints
app.use((req, res) => {
    res.status(404).json({
        message: '404 - Page Not Found'
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
