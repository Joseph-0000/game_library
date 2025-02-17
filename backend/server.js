import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Game from "./models/Game.js";

dotenv.config();

const app = express();

app.use(express.json());

app.post('/api/games', async (req, res) => {
    const game = req.body;

    if(!game.title || !game.genre || !game.platform || !game.release_year || !game.description || !game.image) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const newGame = new Game(game);
    try {
        await newGame.save();
        res.status(201).json({ message: 'Game created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating game' });
    }
})

app.listen(3000, () => { 
    connectDB();
    console.log("Server is running on port 3000")
})

