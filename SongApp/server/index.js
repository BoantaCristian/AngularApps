const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const Song = require('./models/song')

const app = express()
const router = express.Router()

app.use(cors())
app.use('/', router)
app.use(bodyParser.json())

mongoose.Promise = Promise
mongoose.connect('mongodb://localhost:27017/songs')

const connection = mongoose.connection

connection.once('open', () => {
    console.log('MongoDB database connection established successfully')
})

//merg ambele app.get si route.get...Song.find???)
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

router.route('/songs/add').post((req, res) => {
    let song = (req.body)
    console.log(req.body)
    res.send(req.body)
    song.save()
        .then(song => {
            res.status(200).json({'song': 'Added'})
        })
        .catch(err => {
            res.status(400).send('Failed to create')
        })
})

router.route('/songs/delete/:id').get((req, res) => {
    Song.findByIdAndRemove({_id: req.params.id}, (err, song) => {
        if(err)
            res.json(err)
        else
            res.json("Removed")
    })
})

app.post('/songs', (req,res) => {
    let song = (req.body)//primeste
    console.log(song)
    //store to db

    //response works
    res.send(req.body)
})

app.get('/status', (req,res) => res.send('hello world, the server is working'))

const port = 1234
app.listen(port, () => console.log(`Server listening at ${port}`))
