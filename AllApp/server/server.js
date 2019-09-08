const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const Person = require('./Models/person')

const app = express()
const router = express.Router()

app.use(cors())
app.use('/', router)
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/people')

const connection = mongoose.connection
connection.once('open', () => {
    console.log('MongoDB connection established successfully!')
})

//routes
app.get('/status', (req, res) => {
    res.send('The server routes are working!')
})

app.get('/people', (req, res) => {
    Person.find((err, person) => {
        if(err)
            console.log(err)
        else
            res.json(person)
    })
})

app.get('/people/:id', (req, res) => {
    Person.findById(req.params.id, (err, person) => {
        if(err)
            console.log(err)
        else
            res.json(person)
    })
})

app.post('/people/add', (req, res) => {
    let person = new Person(req.body)

    person.save()
        .then(person => {
            res.status(200).json('Person Added')
            console.log(person, 'Added!')
        })
        .catch(err => {
            res.status(400).send('Failed to create')
        })
})

app.get('/people/delete/:id', (req, res) => {
    Person.findByIdAndRemove(req.params.id, (err, person) => {
        if(err)
            res.json(err)
        else
            res.json("Remonved")
    })
})

app.post('/people/update/:id', (req, res) => {
    Person.findById({_id:req.params.id}, (err, person) => {
        if(err)
            return next(new Error('Error!'))
        else{
            person.name = req.body.name
            person.firstName = req.body.firstName
            person.sex = req.body.sex
            person.age = req.body.age

            person.save()
                .then(person => {
                    res.status(200).json('Person updated')
                })
                .catch(err => {
                    res.status(400).send('Failed to update')
                })
        }
    })
})


const port = 4000
app.listen(port, () => console.log(`Express server runing on port ${port}`))