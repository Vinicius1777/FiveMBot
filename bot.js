// File: src/bot.js
const axios = require('axios');

async function updatePlayerCount(count) {
    try {
        // Sends request to update player count on the FiveM server
        await axios.post('http://localhost:30120/playerCount', { count });
    } catch (error) {
        console.error("Error updating player count: ", error);
    }
}
// File: bot.js
const axios = require('axios');

async function updatePlayerCount(count) {
    try {
        await axios.post('http://localhost:30120/playerCount', { count });
    } catch (error) {
        console.error("Error updating player count: ", error);
    }
}

// Simulação da chamada de atualização (pode ser chamada por um evento de conexão)
setInterval(() => {
    const simulatedCount = Math.floor(Math.random() * (2048 - 700 + 1)) + 700; // Valor aleatório entre 700 e 2048
    updatePlayerCount(simulatedCount);
}, 60000); // Atualização a cada 60 segundos

