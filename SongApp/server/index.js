const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const Song = require('./models/song') //ES5
//import Song from './models/song'        //ES6

const app = express()
const router = express.Router()

app.use(cors())
app.use('/', router)
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/songs')

const connection = mongoose.connection

connection.once('open', () => {
    console.log('MongoDB database connection established successfully')
})

//work all 3 routing methods (app.get, router.get, router.route().get)

app.get('/status', (req,res) => res.send('hello world, the server is working'))

//get data from db 27017 on /songs route
router.route('/songs').get((req, res) => {
    Song.find((err,songs) => {
        if(err)
            console.log(err)
        else
            res.json(songs)
    })
})

router.route('/songs/:id').get((req, res) => {
    Song.findById(req.params.id, (err, song) => {
        if(err)
            console.log(err)
        else
        res.json(song)
    })
})

app.post('/addsong', (req,res) => {
    let song = new Song(req.body)

    console.log('Server req.body:', req.body)
    console.log('Server song object:', song)

    //store to db
    song.save()
        .then(song => {
            res.status(200).json({'song': 'Added'})
        })
        .catch(err => {
            res.status(400).send('Failed to create')
        })
})

router.route('/deletesong/:id').get((req, res) => {
    console.log("req.body: ", req.params)
    Song.findByIdAndRemove({_id: req.params.id}, (err, song) => {
        if(err)
            res.json(err)
        else
            res.json("Removed")
    })
})

const port = 1234
app.listen(port, () => console.log(`Server listening at ${port}`))
