import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Movie from './Movie';
import DiscussionSection from './Discussion';
import { Link } from 'react-router-dom';

const BattlePage = () => {
    const API_KEY = 'bc0ec3d6e2fd06b6dcaeb88d4a397346';
    const moviePairings = [
        { firstMovieId: 9552, secondMovieId: 794 },
        { firstMovieId: 639, secondMovieId: 858 },
        { firstMovieId: 807, secondMovieId: 1949 },
        { firstMovieId: 511809, secondMovieId: 15121 },
        { firstMovieId: 796, secondMovieId: 10625 }
    ];

    const [movies, setMovies] = useState([]);
    const [moviePosterWidth, setMoviePosterWidth] = useState(null);

    const fetchMovieDetails = async (movieId) => {
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

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const movieDetails = await Promise.all(moviePairings.map(async (pairing) => {
                    const firstMovie = await fetchMovieDetails(pairing.firstMovieId);
                    const secondMovie = await fetchMovieDetails(pairing.secondMovieId);
                    return [firstMovie, secondMovie];
                }));
                setMovies(movieDetails);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };
        fetchMovies();
    }, []);

    useEffect(() => {
        const movieWidth = document.querySelector('.movie')?.offsetWidth;
        const totalMovieWidth = movieWidth ? movieWidth * 2 : null;
        setMoviePosterWidth(totalMovieWidth);
    }, [movies]);

    return (
        <div>
            <Navbar showLoginButton={true} navbarWidth={moviePosterWidth} />
            {movies.map((pair, index) => (
                <div key={`${pair[0].id}-${pair[1].id}`} className="movie-pair-container">
                    <div className="movies-container">
                        <Movie movie={pair[0]} />
                        <div className="vs-box">
                            <h2>VS</h2>
                        </div>
                        <Movie movie={pair[1]} />
                    </div>
                    <DiscussionSection moviePosterWidth={moviePosterWidth} />
                </div>
            ))}
        </div>
    );
};

export default BattlePage;
