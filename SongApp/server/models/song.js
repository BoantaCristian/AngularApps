const mongoose = require('mongoose')

const Schema = mongoose.Schema

let SongSchema = new Schema({
    title: String,
    author:String
})
const Song = mongoose.model('Song', SongSchema)

module.expors = Song;