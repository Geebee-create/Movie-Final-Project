const express = require('express')

const router = express.Router()

const getAllItemsController = require('../controllers/getAllItemsController.js')
const getItemController = require('../controllers/getItemController.js')
const commentItemsController = require('../controllers/commentItemsController.js')
const postItemsController = require('../controllers/postItemsController.js')
const deleteItemsController = require('../controllers/deleteItemsController.js')

router.get('/items', getAllItemsController.getAllItems)
router.get('/item/:id', getItemController.getItem) 
router.post('/post', postItemsController.createPost)
router.post('/comment', commentItemsController.createComment)
router.delete('/delete/:id', deleteItemsController.deleteItem);


module.exports = router

