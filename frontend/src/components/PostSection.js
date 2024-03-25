import React, { useState } from 'react';

const PostSection = ({ moviePosterWidth }) => {
    const [post, setPost] = useState('');
    const [reply, setReply] = useState(''); // Added state for reply
    const [posts, setPosts] = useState([]);

    const handleSubmit = () => {
        // Handle post submission
        setPosts(prevPosts => [...prevPosts, { content: post, replies: [] }]);
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
            updatedPosts[index].content = updatedPost;
            setPosts(updatedPosts);
        }
    };

    const handleReply = (postIndex, reply) => {
        // Handle posting a reply
        const updatedPosts = [...posts];
        updatedPosts[postIndex].replies.push(reply);
        setPosts(updatedPosts);
        setReply(''); // Clear reply input after posting
    };

    return (
        <div className="post-section" style={{ width: moviePosterWidth, margin: '0 auto', textAlign: 'center' }}>
            {/* Post form */}
            <textarea value={post} onChange={(e) => setPost(e.target.value)} placeholder="Add your post..." style={{ width: '100%', height: '100px', borderRadius: '10px', padding: '10px', marginBottom: '10px' }} />
            <div style={{ marginBottom: '10px' }}> {/* Add margin bottom to create space */}
                <button className="post-action-btn" onClick={handleSubmit}>Submit</button>
            </div>
            
            {/* Render posts */}
            <div className="posts" style={{ width: '100%', textAlign: 'left' }}>
                {posts.map((post, postIndex) => (
                    <div key={postIndex} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0', borderRadius: '5px', width: '100%', maxWidth: '500px', margin: '0 auto' }}>
                        <p>{post.content}</p>
                        <button onClick={() => handleEditPost(postIndex)}>Edit</button>
                        <button onClick={() => handleDeletePost(postIndex)}>Delete</button>
                        {/* Reply form */}
                        <textarea
                            value={reply}
                            onChange={(e) => setReply(e.target.value)}
                            placeholder="Add your reply..."
                            style={{ width: '100%', height: '50px', borderRadius: '10px', padding: '10px', marginTop: '10px' }}
                        />
                        <button onClick={() => handleReply(postIndex, reply)}>Reply</button>
                        {/* Render replies */}
                        <div className="replies">
                            {post.replies.map((reply, replyIndex) => (
                                <div key={replyIndex} style={{ border: '1px solid #ccc', padding: '5px', marginTop: '5px', borderRadius: '5px' }}>
                                    <p>{reply}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PostSection;



