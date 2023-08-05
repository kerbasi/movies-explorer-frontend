import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useEffect, useState } from "react";

function Movies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    import("../../utils/constants").then((data) => {
      setMovies(data.movies);
    });
  }, []);
  return (
    <main className='movies'>
      <SearchForm />
      {movies.length === 0 ? <Preloader /> : <MoviesCardList movies={movies} />}
    </main>
  );
}

export default Movies;
