import express from "express";
import { getGames, createGame, updateGame, deleteGame } from "../controllers/Game.js";

const router = express.Router();

router.post('/', createGame); 
router.get('/', getGames); 
router.put('/:id', updateGame); 
router.delete('/:id', deleteGame); 

export default router;