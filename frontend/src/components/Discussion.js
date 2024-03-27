import React, { useState } from 'react';
import { addPost } from '../api/addPost.js';
import { addComment } from '../api/addComment.js';
import { deleteItems } from '../api/deleteItems.js';
import Navbar from "./Navbar";

const Card = ({ children, style }) => (
    <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', margin: '10px 0', ...style }}>
        {children}
    </div>
);

const DiscussionSection = ({ moviePosterWidth }) => {
    const [inputText, setInputText] = useState('');
    const [discussionItems, setDiscussionItems] = useState([]);

    const handlePost = async () => {
        if (inputText.trim() !== '') {
            try {
                await addPost(inputText);
                setDiscussionItems(prevItems => [
                    ...prevItems,
                    { type: 'post', content: inputText, comments: [] }
                ]);
                setInputText('');
            } catch (error) {
                console.error('Error posting discussion:', error);
            }
        }
    };

    const handleComment = async (index) => {
        const commentText = prompt('Enter your comment:');
        if (commentText !== null) {
            try {
                const newComment = await addComment(commentText);
                setDiscussionItems(prevItems => {
                    const updatedItems = [...prevItems];
                    updatedItems[index].comments.push(newComment.text);
                    return updatedItems;
                });
            } catch (error) {
                console.error('Error adding comment:', error);
            }
        }
    };


    const handleDeleteItem = async (index, postId) => {
        try {
            await deleteItems({ _id: postId }); 
            setDiscussionItems(prevItems => {
                const updatedItems = [...prevItems];
                updatedItems.splice(index, 1);
                return updatedItems;
            });
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    return (
        <div className="discussion-section" style={{ width: moviePosterWidth, margin: '0 auto', textAlign: 'center' }}>
            {/* Discussion input */}
            <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Start a discussion..."
                style={{ width: '100%', height: '100px', borderRadius: '10px', padding: '10px', marginBottom: '10px' }}
            />
            <button className="discussion-action-btn" onClick={handlePost}>Post</button>

            {/* Render discussion items (posts and comments) */}
            <div className="discussion-items" style={{ width: '100%', textAlign: 'left' }}>
                {discussionItems.map((item, index) => (
                    <Card key={index} style={{ marginBottom: '20px' }}>
                        <div>
                            {item.content}
                        </div>
                        {/* Render comments */}
                        {item.comments.map((comment, commentIndex) => (
                            <div key={commentIndex}>
                                {comment}
                            </div>
                        ))}
                        {/* Comment button */}
                        <button className="discussion-action-btn" onClick={() => handleComment(index)}>Comment</button>
                       {/* Delete button */}
                       <button className="discussion-action-btn" onClick={() => handleDeleteItem(index, item._id)}>Delete</button>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default DiscussionSection;