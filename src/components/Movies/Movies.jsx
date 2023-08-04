import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useEffect, useState } from "react";

function Movies({ width }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    import("../../utils/constants").then((data) => {
      setMovies(data.movies);
    });
  }, []);
  return (
    <div className='movies'>
      <SearchForm />
      {movies.length === 0 ? (
        <Preloader />
      ) : (
        <MoviesCardList movies={movies} width={width} />
      )}
    </div>
  );
}

export default Movies;
