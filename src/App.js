import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [SearchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);
  const getMovies = (API) => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  };
  const handelChangeSearch = (e) => {
    setSearchTerm(e.target.value);
    if (SearchTerm) {
      getMovies(SEARCHAPI + SearchTerm);
    } else {
      getMovies(FEATURED_API);
    }
  };
  const handelWelcome = ()=>{
    getMovies(FEATURED_API);
  }
  return (
    <React.Fragment>
      <header>
        
        <div className="search-container">
        <h2 className="Welcome" onClick={handelWelcome}>Welcome to Movies Application</h2>
          <div className="input-group Search">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              value={SearchTerm}
              onChange={handelChangeSearch}
            />
          </div>
        </div>
      </header>
      <div className="container">
        <div className="movie-container">
          {movies.map((movie) => (
            <Movie {...movie} key={movie.id} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
