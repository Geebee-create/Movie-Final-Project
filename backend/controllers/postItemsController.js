// our controllers are the actions depending on the route.
// THE VIDS FROM WHEN WE BUILT THIS FILE are 'Fullstack exercise- 20240308_140119' from 03-08,
// and then 'Full Stack Cont-20240311_100628' from 03-11.

const Post = require ("../models/postSchema.js")

// createPost can also be seen in itemsRoute.js
const createPost = async (req, res) =>  {
    const { text } = req.body
    console.log(text)
    // below three lines are to create a new item from schema model. 
    // why is post not green when 'Comment' is in the function below? 
    const postObject = new Post({
        text
    })
// below line is to save it with the .save() mongoose method.
    const newPost = await postObject.save()
    // below line is to get a response back.
    res.status(200).json(newPost)
}



module.exports = {
    createPost
}