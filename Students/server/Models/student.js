const mongoose = require('mongoose')

const Schema = mongoose.Schema

let studentSchema = new Schema({
    name: String,
    firstName: String,
    sex: String,
    age: Number,
    specialization: String,
    year: Number
})

const Student = mongoose.model('Student', studentSchema)

module.exports = Student
