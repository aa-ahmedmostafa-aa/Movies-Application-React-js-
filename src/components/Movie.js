import React from "react";

const IMGS_API = "https://image.tmdb.org/t/p/w1280";
const setVoteClass = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};
const Movie = ({ title, poster_path, overview, vote_average }) => (
  <div className="movie">
    <img src={IMGS_API + poster_path} alt={title} />
    <div className="movie-info">
      <h6>{title}</h6>
      <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
    </div>
    <div className="movie-hover">
      <h2>Overview:</h2>
      <p>{overview}</p>
    </div>
  </div>
);
export default Movie;
