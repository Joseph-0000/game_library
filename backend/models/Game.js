import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,  
    },
    platform: {
        type: String,
        required: true,
    },
    release_year: {
        type: Date,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});
const Game = mongoose.model('Game', gameSchema);
export default Game;
    