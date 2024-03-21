// this schema will be to send posts/reviews to the posts collection in the database.

// this file defines what the data looks like 
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
    text: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Posts', postSchema)

// example of how module.exports line looked for the fullstack todo app:
// module.exports = mongoose.model('Todo', todoSchema)

