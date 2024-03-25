import React, { useState } from 'react';

const PostSection = ({ moviePosterWidth }) => {
    const [post, setPost] = useState('');
    const [posts, setPosts] = useState([]);

    const handleSubmit = () => {
        // Handle post submission
        setPosts(prevPosts => [...prevPosts, post]);
        setPost('');
    };

    const handleDeletePost = (index) => {
        // Handle post deletion
        const updatedPosts = [...posts];
        updatedPosts.splice(index, 1);
        setPosts(updatedPosts);
    };

    const handleEditPost = (index) => {
        // Handle post editing
        const updatedPost = prompt('Enter the updated post:');
        if (updatedPost !== null) {
            const updatedPosts = [...posts];
            updatedPosts[index] = updatedPost;
            setPosts(updatedPosts);
        }
    };

    return (
        <div className="post-section" style={{ width: moviePosterWidth, margin: '0 auto', textAlign: 'center' }}>
            {/* Post form */}
            <textarea value={post} onChange={(e) => setPost(e.target.value)} placeholder="Add your post..." style={{ width: '100%', height: '100px', borderRadius: '10px', padding: '10px', marginBottom: '10px' }} />
            <div style={{ marginBottom: '10px' }}> {/* Add margin bottom to create space */}
                <button className="post-action-btn" onClick={handleSubmit}>Submit</button>
                <button className="post-action-btn" onClick={() => setPost('')}>Delete</button> {/* Added margin to the Delete button */}
            </div>
            
            {/* Render posts */}
            <div className="posts" style={{ width: '100%', textAlign: 'left' }}>
                {posts.map((post, index) => (
                    <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0', borderRadius: '5px', width: '100%', maxWidth: '500px', margin: '0 auto' }}>
                        <p>{post}</p>
                        <button onClick={() => handleEditPost(index)}>Edit</button>
                        <button onClick={() => handleDeletePost(index)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PostSection;





