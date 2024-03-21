const express = require('express')

const router = express.Router()

const commentItemsController = require('../controllers/commentItemsController.js')
const postItemsController = require('../controllers/postItemsController.js')


router.post('/post', postItemsController.createPost)
router.post('/comment', commentItemsController.createComment)
// router.get (i don't know if we will need this one? will we need to fetch any data from Atlas? or just send it?)

module.exports = router

// we will also need to tell the server.js file that it can use these routes. 
// for the fullstack todo app this involved the insertion, in the server.js file, of the lines:
// const itemRoutes = require('./routes/itemsRoute')
// app.use ('/todos', itemRoutes)