// this file defines what the data looks like 
const mongoose = require('mongoose')

const Schema = mongoose.Schema
// I have made a change to the below line, but I still need to wrap my head around how this file works... Gina 
const moviesSchema = new Schema({
    text: {
        type: String,
        required: true
    }
})
// below line needs completing:
module.exports = mongoose.model('',)

// example of how module.exports line looked for the fullstack todo app:
// module.exports = mongoose.model('Todo', todoSchema)

