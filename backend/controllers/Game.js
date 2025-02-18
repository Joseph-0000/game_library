import Game from "../models/Game";
import mongoose from "mongoose";

export const createGame = async (req, res) => {
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
}

export const getGames = async (req, res) => {
    try {
        const games = await Game.find();
        res.status(200).json({ success: true, data: games });
    } catch (error) {
        console.error("Error", error);
        res.status(500).json({ success: false, message: 'Error fetching games' });
    }
}

export const updateGame = async (req, res) => {
    const { id } = req.params;
    const game = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'Game not found' });
    }

    try {
        const updatedGame = await Game.findByIdAndUpdate(id, game, { new: true });
        res.json(updatedGame);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating game' });
    }
}

export const deleteGame = async (req, res) => {
    const { id } = req.params;
    try {
        await Game.findByIdAndDelete(id);
        res.json({ message: 'Game deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting game' });
    }
}