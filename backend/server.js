import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import Game from "./routes/Game.js";

dotenv.config();

const app = express();  

// Enable CORS
app.use(cors({
    origin: "http://localhost:5173", 
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type"
}));

app.use(express.json());

// Routes
app.use('/api/games', Game);

// Start server and connect to database
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => { 
    try {
        await connectDB();
        console.log(`Server is running on port ${PORT}`);
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
});
