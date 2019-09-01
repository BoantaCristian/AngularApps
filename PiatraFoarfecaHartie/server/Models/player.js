const mongoose = require('mongoose')

const Schema = mongoose.Schema

let playerSchema = new Schema({
    player: String,
    score: Number,
    computerScore: Number
})

const Player = mongoose.model('Player', playerSchema)

module.exports = Player
