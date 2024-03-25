import React, { useState } from 'react';

const CommentSection = ({ moviePosterWidth }) => {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    const handleComment = () => {
        // Handle comment submission
        setComments(prevComments => [...prevComments, comment]);
        setComment('');
    };

    const handleDeleteComment = (index) => {
        // Handle comment deletion
        const updatedComments = [...comments];
        updatedComments.splice(index, 1);
        setComments(updatedComments);
    };

    const handleEditComment = (index) => {
        // Handle comment editing
        const updatedComment = prompt('Enter the updated comment:');
        if (updatedComment !== null) {
            const updatedComments = [...comments];
            updatedComments[index] = updatedComment;
            setComments(updatedComments);
        }
    };

    return (
        <div className="comment-section" style={{ width: moviePosterWidth, margin: '0 auto', textAlign: 'center' }}>
            {/* Comment form */}
            <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Add your comment..." style={{ width: '100%', height: '100px', borderRadius: '10px', padding: '10px', marginBottom: '10px' }} />
            <div style={{ marginBottom: '10px' }}> {/* Add margin bottom to create space */}
                <button className="comment-action-btn" onClick={handleComment}>Submit</button>
                <button className="comment-action-btn" onClick={() => setComment('')}>Delete</button>
            </div>
            
            {/* Render comments */}
            <div className="comments" style={{ width: '100%', textAlign: 'left' }}>
                {comments.map((comment, index) => (
                    <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0', borderRadius: '5px', width: '100%', maxWidth: '500px', margin: '0 auto' }}>
                        <p>{comment}</p>
                        <button className="comment-action-btn" onClick={() => handleEditComment(index)}>Edit</button>
                        <button className="comment-action-btn" onClick={() => handleDeleteComment(index)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CommentSection;






