const Comment = require("../models/commentSchema.js");

// createComment can also be seen in itemsRoute.js
const createComment = async (req, res) =>  {
    const { text } = req.body
    console.log(text)
    const commentObject = new Comment({
        text
    })
    const newComment = await commentObject.save()
    res.status(200).json(newComment)
}

module.exports = {
    createComment
}