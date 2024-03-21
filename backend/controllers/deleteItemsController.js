const Post = require("../models/postSchema.js");
const Comment = require("../models/commentSchema.js");

const deleteItem = async (req, res) => {
    try {
        // Get the ID from ':id' parameter in the route
        const { id } = req.params;

        // To check if the ID corresponds to a post or a comment
        let deletedItem;
        if (req.query.type === 'post') {
            deletedItem = await Post.findByIdAndDelete(id);
        } else if (req.query.type === 'comment') { // Check if the ID corresponds to a comment
            deletedItem = await Comment.findByIdAndDelete(id);
        } else { // Invalid request
            return res.status(400).json({ message: 'Invalid item type specified' });
        }

        if (!deletedItem) { // If item isn't found
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