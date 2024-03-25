// Movie.js
import React from 'react';

const Movie = ({ movie }) => {
    return (
        <div className="movie" key={movie.id}>
            <h2>{movie.title}</h2>
            <img src={movie.posterUrl} alt={movie.title} />
        </div>
    );
}

export default Movie;
