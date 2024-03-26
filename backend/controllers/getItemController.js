const Post = require("../models/postSchema.js");
const Comment = require("../models/commentSchema.js");

const getItem = async (req, res) => {
    try {
        // To get the ID from ':id' parameter in the route
        const { id } = req.params;

        // Finds both posts and comments by their ID
        const post = await Post.findById(id);
        const comment = await Comment.findById(id);

        // To check if any item was found
        if (!post && !comment) {
            return res.status(404).json({ message: 'Item not found' });
        }

        // To determine the type of item found and respond accordingly
        if (post) {
            res.status(200).json({ item: post, itemType: 'post' });
        } else {
            res.status(200).json({ item: comment, itemType: 'comment' });
        }
    } catch (error) {
        // Handle errors
        console.error('Error fetching item:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    getItem
};