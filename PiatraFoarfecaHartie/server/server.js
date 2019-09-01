const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const Player = require('./Models/player')

const app = express()
const router = express.Router()

app.use(cors())
app.use('/', router)
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/players')

const connection = mongoose.connection
connection.once('open', () => {
    console.log('MongoDB connection established successfully!')
})
//routes
app.get('/status', (req, res) => {
    res.send('The server routes are working!')
})

app.get('/players', (req, res) => {
    Player.find((err, players) => {
        if(err)
            console.log(err)
        else
            res.json(players)
    })
})

app.get('/players/:id', (req, res) => {
    Player.findById(req.params.id, (err, player) => {
        if(err)
            console.log(err)
        else
            res.json(player)
    })
})

app.post('/players/add', (req, res) => {
    let player = new Player(req.body)
    
    console.log('Server req.body:', req.body)
    console.log('Server song object:', player)

    player.save()
        .then(player => {
            res.status(200).json({'player': 'Added'})
        })
        .catch(err => {
            res.status(400).send('Failed to create!')
            //console.log(err)
        })
    })

app.get('/players/delete/:id', (req, res) => {
    Player.findByIdAndRemove({_id: req.params.id}, (err, player) => {
        if(err)
            res.json(err)
        else
            res.json("Removed")
    })
})

app.post('/players/update/:id', (req, res) => {
    Player.findById(req.params.id, (err, player) => {
        if(err)
            return next(new Error('Error!'))
        else {
            player.player = req.body.player
            player.score = req.body.score
            player.computerScore = req.body.computerScore

            player.save()
                .then(player => {
                    res.status(200).json({'player': 'Updated'})
                })
                .catch(player => {
                    res.status(400).send('Failed to update')
                })
        }
    })
})

const port = 4000
app.listen(port, () =>{
    console.log(`Express server runing on port ${port}`)
} )