const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const Issue = require('./models/issue')

const app = express()
const router = express.Router()

app.use(cors())
app.use('/', router)
app.use(bodyParser.json())

//db mongoose connection
mongoose.connect('mongodb://localhost:27017/issues')

const connection = mongoose.connection

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!')
})

//server routes
app.get('/status', (req, res) => {
    res.send('The server is working!')
})

app.get('/issues', (req, res) => {
    Issue.find((err, issues) => {
        if(err)
            console.log(err)
        else
            res.json(issues)
    })
})

app.get('/issues/:id', (req, res)  => {
    Issue.findById(req.params.id, (err, issue) => {
        if(err)
            console.log(err)
        else
        res.json(issue)
    })
})
/*
router.route('/isues/:id').get((req, res) => {
    Issue.findById(req.params.id, (err, issue) => {
        if(err)
            console.log(err)
        else
        res.json(issue)
    })
})
*/
app.post('/issues/add',(req,res) => {
    let issue = new Issue(req.body)

    console.log('Server blog object:', issue)

    //store to db
    issue.save()
        .then(issue => {
            res.status(200).json({'issue': 'Added'})
        })
        .catch(err => {
            res.status(400).send('Failed to create')
        })
})

app.post('/issues/update/:id', (req, res) => {
    Issue.findById(req.params.id, (err, issue) => {
        console.log('server id ', req.params.id)
        console.log('server id ', req.body)
        if(!issue)
            return next(new Error('Couldn\'t load document!'))
        else {
            
            issue.title = req.body.title
            issue.responsible = req.body.responsible
            issue.description = req.body.description
            issue.severity = req.body.severity
            issue.status = req.body.status
                
            issue.save()
            .then(issue => {
                res.status(200).json({'issue': 'Updated'})
            })
            .catch(err => {
                res.status(400).send('Failed to create')
            })
        } 

    })
})

app.get('/issues/delete/:id', (req, res) => {
    Issue.findByIdAndRemove({_id: req.params.id}, (err, issue) => {
        if(err)
            res.json(err)
        else
            res.json("Removed")
    })
})
/*
router.route('/issues/delete/:id').get((req, res) => {
    Issue.findByIdAndRemove({_id: req.params.id}, (err, issue) => {
        if(err)
            res.json(err)
        else
            res.json("Removed")
    })
})
*/
const port = 4000;
app.listen(port, ()=> console.log(`Express server running on port ${port}`))