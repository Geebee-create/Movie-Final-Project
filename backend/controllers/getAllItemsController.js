const Post = require("../models/postSchema.js");
const Comment = require("../models/commentSchema.js");

const getAllItems = async (req, res) => {
    try {
        // Find all posts and comments from their respective models
        const posts = await Post.find({});
        const comments = await Comment.find({});

        // Respond with an object containing both posts and comments
        res.json({
            message: "All items",
            posts: posts,
            comments: comments
        });
    } catch (error) {
        console.error("Error fetching items:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {
    getAllItems
};