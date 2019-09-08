const mongoose = require('mongoose')

const Schema = mongoose.Schema

let personSchema = new Schema({
    name: String,
    firstName: String,
    sex: String,
    age: Number
})

const Person = mongoose.model('Person', personSchema)

module.exports = Person
