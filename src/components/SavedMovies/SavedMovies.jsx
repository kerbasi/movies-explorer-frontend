import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useEffect, useState } from "react";

function SavedMovies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    import("../../utils/constants").then((data) => {
      setMovies(data.movies);
    });
  }, []);
  return (
    <main className='saved-movies'>
      <SearchForm />
      {movies.length === 0 ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={movies.filter((movie) => movie.saved === true)}
        />
      )}
    </main>
  );
}

export default SavedMovies;
