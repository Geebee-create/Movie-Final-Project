import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Movie from "./Movie";
import DiscussionSection from './Discussion';
// import Log from "../login/Sign"; (is this an old file?- G)
import { Link } from "react-router-dom";

const API_KEY = "bc0ec3d6e2fd06b6dcaeb88d4a397346"; // Your TMDb API key
const movieIds = {
  firstAPI: [693134], // Movie ID for the first API
  secondAPI: [181812], // Movie ID for the second API
};

const fetchMovieDetails = async (movieId) => {
  const base_url = "https://api.themoviedb.org/3/movie/";
  const url = `${base_url}${movieId}?api_key=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      const movieData = await response.json();
      return {
        id: movieId,
        title: movieData.title,
        posterUrl: `https://image.tmdb.org/t/p/original${movieData.poster_path}`,
      };
    } else {
      console.error(`Failed to fetch details for movie with ID ${movieId}`);
      return null;
    }
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};

const Home = () => {
  const [firstAPIMovie, setFirstAPIMovie] = useState(null);
  const [secondAPIMovie, setSecondAPIMovie] = useState(null);
  const [moviePosterWidth, setMoviePosterWidth] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const firstAPIMovieDetails = await Promise.all(
        movieIds.firstAPI.map((movieId) => fetchMovieDetails(movieId))
      );
      const secondAPIMovieDetails = await Promise.all(
        movieIds.secondAPI.map((movieId) => fetchMovieDetails(movieId))
      );

      setFirstAPIMovie(firstAPIMovieDetails.find((movie) => movie !== null));
      setSecondAPIMovie(secondAPIMovieDetails.find((movie) => movie !== null));
    }

    fetchData();
  }, []);

  useEffect(() => {
    // Get the width of the first .movie element
    const movieWidth = document.querySelector(".movie")?.offsetWidth;

    // Get the total width of the two .movie elements
    const totalMovieWidth = movieWidth * 2;

    // Set the width of the post and comment sections to match the total width of the movie containers
    setMoviePosterWidth(totalMovieWidth);
  }, [firstAPIMovie, secondAPIMovie]);

  return (
    <div>
      <Navbar />
      <div>
        <button className="login-button">
          <Link to="/log" className="login-button-link">
            Log-in/Register
          </Link>
        </button>
      </div>
      <div className="movies-container">
        {firstAPIMovie && <Movie movie={firstAPIMovie} />}
        <div className="vs-box">
          <h2>VS</h2>
        </div>
        {secondAPIMovie && <Movie movie={secondAPIMovie} />}
      </div>
      <DiscussionSection moviePosterWidth={moviePosterWidth} />
    </div>
  );
};

export default Home;