import express from "express";
import { getGames, createGame, updateGame, deleteGame } from "../controllers/Game.js";

const router = express.Router();

router.post('/', createGame); // Create a new game
router.get('/', getGames); // Fetch all games
router.put('/:id', updateGame); // Update a game
router.delete('/:id', deleteGame); // Delete a game

export default router;