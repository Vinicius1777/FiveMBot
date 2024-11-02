// File: app.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 30120; // Porta onde a API ficará disponível

app.use(cors());
app.use(express.json());

let playerCount = 700; // Valor inicial

app.get('/playerCount', (req, res) => {
    res.json({ count: playerCount });
});

app.post('/playerCount', (req, res) => {
    const { count } = req.body;
    if (typeof count === 'number' && count >= 0) {
        playerCount = count;
        res.json({ message: 'Player count updated successfully.', count: playerCount });
    } else {
        res.status(400).json({ error: 'Invalid count value' });
    }
});

app.listen(port, () => {
    console.log(`FiveM Player API is running on http://localhost:${port}`);
});

