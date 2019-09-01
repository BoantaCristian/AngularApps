const mongoose = require('mongoose')
//import mongoose from 'mongoose'

const Schema = mongoose.Schema

let IssueSchema = new Schema({
    title:String,
    responsible: String,
    description: String,
    severity: String,
    status: String
})

const Issue = mongoose.model('Issue', IssueSchema)

module.exports = Issue
//export default Issue