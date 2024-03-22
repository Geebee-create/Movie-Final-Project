export const NavBar = () => {
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
    </div>
  );
};
