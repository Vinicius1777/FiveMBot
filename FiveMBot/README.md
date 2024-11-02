# FiveMBot
# FiveM Player Count Bot

This project provides a bot for the FiveM server that simulates a custom player count display. The bot includes a REST API built with Node.js and scripts in Lua, JavaScript, and Python to adjust and display the player count.

## Project Structure


## Features

- **Custom Player Count**: Displays a simulated number of players (e.g., 700/2048) on the FiveM server.
- **Performance-Optimized**: Script runs efficiently without overloading the server.
- **Multi-language Support**: Main bot functionality in JavaScript, with additional scripts in Lua and Python for flexibility.
- **REST API**: Node.js API for managing and displaying player count data.

## Prerequisites

- **Node.js** and **npm** (for the API and JavaScript scripts)
- **FiveM Server** (to run the Lua script)
- **Python** (if using the optional Python script)
- **Visual Studio Professional 2022** (recommended for project setup and debugging)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/FiveMPlayerCountBot.git
   cd FiveMPlayerCountBot
npm install
start server.lua
node app.js
node src/bot.js
python src/player_count.py
curl http://localhost:30120/playerCount
{ "count": 700 }
curl -X POST http://localhost:30120/playerCount -H "Content-Type: application/json" -d '{"count": 750}'
This `README.md` provides a complete overview of the project, with detailed instructions on installation, usage, and API endpoints.


