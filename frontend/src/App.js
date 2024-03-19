// Vinnie's code v1.0: compatible with homepage.css

import React, { useState, useEffect } from 'react';

const API_KEY = 'bc0ec3d6e2fd06b6dcaeb88d4a397346'; // Your TMDb API key
const movieIds = [693134, 181812]; // Movie IDs for "Dune Part Two" and "Star Wars: The Rise of Skywalker". Taken from html of the APIs

const base_url = 'https://api.themoviedb.org/3/movie/';

async function fetchMovieDetails(movieId) {
    const url = `${base_url}${movieId}?api_key=${API_KEY}`;

    try {
        const response = await fetch(url);
        if (response.ok) {
            const movieData = await response.json();
            return {
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
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const movieDetails = await Promise.all(movieIds.map(movieId => fetchMovieDetails(movieId)));
            setMovies(movieDetails.filter(movie => movie !== null));
        }

        fetchData();
    }, []);

    return (
      <div className="movies-container"> {/* Apply the movies-container class */}
          <div>
              {movies.map((movie, index) => (
                  <div className="movie" key={index}> {/* Apply the movie class */}
                      <h2>{movie.title}</h2>
                      <img src={movie.posterUrl} alt={movie.title} />
                  </div>
              ))}
          </div>
      </div>
  );
}

export default App;
