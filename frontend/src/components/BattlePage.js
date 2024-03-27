import React, { useState, useEffect } from 'react';
import Movie from './Movie';
import DiscussionSection from './Discussion'; // Import DiscussionSection instead of PostSection

const BattlePage = () => {
    // Movie pairings data
    const moviePairings = [
        { firstMovieId: 9552, secondMovieId: 794 },
        { firstMovieId: 639, secondMovieId: 858 },
        { firstMovieId: 807, secondMovieId: 1949 },
        { firstMovieId: 511809, secondMovieId: 15121 },
        { firstMovieId: 796, secondMovieId: 10625 }
    ];

    // State to store movie data
    const [movies, setMovies] = useState([]);

    // Fetch movie details function
    const fetchMovieDetails = async (movieId) => {
        const API_KEY = 'bc0ec3d6e2fd06b6dcaeb88d4a397346'; // Your TMDb API key
        const base_url = 'https://api.themoviedb.org/3/movie/';
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
    };

    // Fetch movie details for each pairing
    useEffect(() => {
        const fetchMovies = async () => {
            const movieDetails = await Promise.all(moviePairings.map(pairing => {
                const firstMovie = fetchMovieDetails(pairing.firstMovieId);
                const secondMovie = fetchMovieDetails(pairing.secondMovieId);
                return Promise.all([firstMovie, secondMovie]);
            }));
            setMovies(movieDetails);
        };
        fetchMovies();
    }, []);

    return (
        <div>
            {movies.map((pair, index) => (
                <div key={index} className="movie-pair-container">
                    <div key={`pair-${index}`} className="movies-container">
                        <Movie movie={pair[0]} />
                        <div className="vs-box"><h2>VS</h2></div>
                        <Movie movie={pair[1]} />
                    </div>
                    <DiscussionSection /> {/* Use DiscussionSection instead of PostSection */}
                </div>
            ))}
        </div>
    );
}

export default BattlePage;



