require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
// below commented out line needs editing and completing to fit with this project, look at what is in the itemsRoute.js file.
// const itemRoutes = require('./routes/')
const app = express()
app.use(cors())
//parse incoming data
app.use(express.json())
// below line needs finishing/filling in, look at what is in the itemsRoute.js file.
app.use('/',)

mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    app.listen(4000, () => {
        console.log('listening on port 4000, connected to db')
    } )
})

.catch((error) => {
    console.log(error)
})

// how line 13 is in the fullstack todo code:
// app.use('/todos', itemRoutes)