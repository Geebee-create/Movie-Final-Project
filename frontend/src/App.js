import React, { useState, useEffect, useRef } from 'react';

const API_KEY = 'bc0ec3d6e2fd06b6dcaeb88d4a397346'; // Your TMDb API key
const movieIds = {
    firstAPI: [693134], // Movie ID for the first API
    secondAPI: [181812] // Movie ID for the second API
};

const base_url = 'https://api.themoviedb.org/3/movie/';

async function fetchMovieDetails(movieId) {
    const url = `${base_url}${movieId}?api_key=${API_KEY}`;

    try {
        const response = await fetch(url);
        if (response.ok) {
            const movieData = await response.json();
            return {
                id: movieId,
                title: movieData.title,
                posterUrl: `https://image.tmdb.org/t/p/original${movieData.poster_path}`
            };
        } else {
            console.error(`Failed to fetch details for movie with ID ${movieId}`);
            return null;
        }
    } catch (error) {
        console.error('Error fetching movie details:', error);
        return null;
    }
}

function App() {
    const [firstAPIMovie, setFirstAPIMovie] = useState(null);
    const [secondAPIMovie, setSecondAPIMovie] = useState(null);
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [reply, setReply] = useState('');
    const [replies, setReplies] = useState([]);
    const commentSectionRef = useRef(null);
    const [moviePosterWidth, setMoviePosterWidth] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const firstAPIMovieDetails = await Promise.all(movieIds.firstAPI.map(movieId => fetchMovieDetails(movieId)));
            const secondAPIMovieDetails = await Promise.all(movieIds.secondAPI.map(movieId => fetchMovieDetails(movieId)));

            setFirstAPIMovie(firstAPIMovieDetails.find(movie => movie !== null));
            setSecondAPIMovie(secondAPIMovieDetails.find(movie => movie !== null));
        }

        fetchData();
    }, []);

    useEffect(() => {
        // Get the width of the first .movie element
        const movieWidth = document.querySelector('.movie')?.offsetWidth;

        // Get the total width of the two .movie elements
        const totalMovieWidth = movieWidth * 2;

        // Set the width of the navbar to match the total width of the movie containers
        document.querySelector('.navbar').style.width = totalMovieWidth + 'px';

        setMoviePosterWidth(totalMovieWidth);
    }, [firstAPIMovie, secondAPIMovie]);

    const handleSubmit = () => {
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

    const handleReply = () => {
        // Handle reply submission
        setReplies(prevReplies => [...prevReplies, reply]);
        setReply('');
    };

    const handleDeleteReply = (index) => {
        // Handle reply deletion
        const updatedReplies = [...replies];
        updatedReplies.splice(index, 1);
        setReplies(updatedReplies);
    };

    return (
        <div>
            <div className="navbar">
                <a href="#home">Homepage</a>
                <a href="#trending">Trending</a>
                <a href="#profile">Profile</a>
                <a href="#about">About</a>
            </div>
            <div className="movies-container">
                {firstAPIMovie && (
                    <div className="movie" key={firstAPIMovie.id}>
                        <h2>{firstAPIMovie.title}</h2>
                        <img src={firstAPIMovie.posterUrl} alt={firstAPIMovie.title} />
                    </div>
                )}
                <div className="vs-box">
                    <h2>VS</h2>
                </div>
                {secondAPIMovie && (
                    <div className="movie" key={secondAPIMovie.id}>
                        <h2>{secondAPIMovie.title}</h2>
                        <img src={secondAPIMovie.posterUrl} alt={secondAPIMovie.title} />
                    </div>
                )}
            </div>
            {/* Comment Section */}
            <div className="comment-section" ref={commentSectionRef} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', width: moviePosterWidth, margin: '0 auto' }}>
                <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Add your comment..." style={{ width: '100%', height: '100px', borderRadius: '10px', padding: '10px', marginBottom: '10px' }}></textarea>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <button onClick={handleSubmit}>Submit</button>
                    <button>Delete</button>
                </div>
                {/* Render comments */}
                <div className="comments" style={{ width: '100%', marginTop: '20px' }}>
                    {comments.map((comment, index) => (
                        <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0', borderRadius: '5px', width: '100%' }}>
                            <p>{comment}</p>
                            <button onClick={() => handleDeleteComment(index)}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
            {/* Reply Section */}
            <div className="reply-section" style={{ marginTop: '20px', width: moviePosterWidth, margin: '0 auto' }}>
                <textarea value={reply} onChange={(e) => setReply(e.target.value)} placeholder="Add your reply..." style={{ width: '100%', height: '100px', borderRadius: '10px', padding: '10px', marginBottom: '10px' }}></textarea>
                <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                    <button onClick={handleReply}>Reply</button>
                </div>
                {/* Render replies */}
                <div className="replies" style={{ width: '100%', marginTop: '20px' }}>
                    {replies.map((reply, index) => (
                        <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0', borderRadius: '5px', width: '100%' }}>
                            <p>{reply}</p>
                            <button onClick={() => handleDeleteReply(index)}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;

