const Post = require("../models/postSchema.js");
const Comment = require("../models/commentSchema.js");

const deleteItem = async (req, res) => {
    try {
        // Get the ID from ':id' parameter in the route
        const { id } = req.params;

        // Attempt to delete the item by ID for posts and comments
        const deletedPost = await Post.findByIdAndDelete(id);
        const deletedComment = await Comment.findByIdAndDelete(id);

        // Check if any item was deleted
        if (!deletedPost && !deletedComment) {
            return res.status(404).json({ message: 'Item not found' });
        }

        // This will send a success response
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        // To handle errors
        console.error('Error deleting item:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    deleteItem
};