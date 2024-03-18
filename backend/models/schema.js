// this file defines what the data looks like 
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const todoSchema = new Schema({
    text: {
        type: String,
        required: true
    }
})
// below line needs completing:
module.exports = mongoose.model('',)

// example of how module.exports line looked for the fullstack todo app:
// module.exports = mongoose.model('Todo', todoSchema)

