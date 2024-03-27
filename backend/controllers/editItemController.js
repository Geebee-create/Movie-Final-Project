// This function may be more tricky to implement in the front end and may be a stretch. 

const Post = require("../models/postSchema.js");
const Comment = require("../models/commentSchema.js");

const editItem = async (req, res) => {
    try {
        // To get the ID 
        const { id } = req.params;
        const { text } = req.body;

        // is it a post or a comment 
        if (req.body.itemType === 'post') {
            // for if it's a post
            const updatedPost = await Post.findByIdAndUpdate(id, { text }, { new: true });
            res.status(200).json({ item: updatedPost, itemType: 'post' });
        } else if (req.body.itemType === 'comment') {
            // for if it's a comment 
            const updatedComment = await Comment.findByIdAndUpdate(id, { text }, { new: true });
            res.status(200).json({ item: updatedComment, itemType: 'comment' });
        } else {
            res.status(400).json({ message: 'Invalid item type' });
        }
    } catch (error) {
        console.error('Error editing item:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    editItem
};