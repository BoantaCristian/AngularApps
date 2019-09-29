const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const Student = require('./Models/student')

const app = express()
const router = express.Router()

app.use(cors())
app.use('/', router)
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/students')

const connection = mongoose.connection
connection.once('open', () => {
    console.log('MongoDB connection established successfully!')
})

app.get('/status', (req, res) => {
    res.send('Server routes are working')
})

app.get('/students', (req, res) => {
    Student.find((err, students) => {
        if(err)
            console.log(err)
        else
            res.json(students)
    })
})

app.get('/students/:id', (req, res) => {
    Student.findById(req.params.id, (err, students) => {
        if(err)
            console.log(err)
        else
            res.json(students)
    })
})

app.post('/students/add', (req, res) => {
    const student = new Student(req.body)

    student.save()
        .then(student => {
            res.status(200).json('Student Created')
            console.log('created: ', student)
        })
        .catch(err => {
            res.status(400).json('Failed to create')
            console.log(err)
        })
})

app.post('/students/update/:id', (req, res) => {
    Student.findById(req.params.id, (err, student) => {
        if(err)
            return next(new Error('Error!'))
        else {
            student.name = req.body.name
            student.firstName = req.body.firstName
            student.sex = req.body.sex
            student.age = req.body.age
            student.specialization = req.body.specialization
            student.year = req.body.year

            student.save()
                .then(student => {
                    res.status(200).json('Student updated')
                    console.log(student)
                })
                .catch(err => {
                    res.status(400).json('Failed to update')
                    console.log(err)
                })
        }
    })
})

app.get('/students/delete/:id', (req, res) => {
    Student.findByIdAndRemove(req.params.id, (err, student) => {
        if(err)
            res.json(err)
        else
            res.json('Removed')
    })
})

const port = 4000
app.listen(port, () => {
    console.log(`Express server is working on port ${port}`)
})