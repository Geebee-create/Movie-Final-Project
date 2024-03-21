require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const itemRoutes = require('./routes/itemsRoute')
const app = express()
app.use(cors())
//parse incoming data
app.use(express.json())

app.use('/movies', itemRoutes)
// above line creates the endpoint http://localhost:4000/movies/post or http://localhost:4000/movies/comment

// this is how we can locally add to our database, by putting this endpoint into thunderclient (an id will need to be placed after it)

mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    app.listen(4000, () => {
        console.log('listening on port 4000, connected to db')
    } )
})

.catch((error) => {
    console.log(error)
})

