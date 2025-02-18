import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Game from "./models/Game.js";
import monggoose from "mongoose";

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/games', Game);

// Start server and connect to database
app.listen(3000, () => { 
    connectDB();
    console.log("Server is running on port 3000")
})

