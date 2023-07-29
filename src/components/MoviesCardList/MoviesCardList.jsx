import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useState } from "react";
import { useEffect } from "react";

function MoviesCardList({ movies }) {
  const [pagesLimit, setPagesLimit] = useState(16);
  const [slicedMovies, setSlicedMovies] = useState(movies.slice(0, pagesLimit));
  const paginationHandler = () => {
    setPagesLimit((prev) => prev + 16);
  };
  useEffect(() => {
    setSlicedMovies(movies.slice(0, pagesLimit));
  }, [pagesLimit]);
  return (
    <section className='movies-card-list'>
      {slicedMovies.map((movie) => {
        return <MoviesCard movie={movie} key={Math.random() * 1000} />;
      })}
      <div className='movies-card-list__more_button-wrapper'>
        <button
          className={`movies-card-list__more-button ${
            movies.length < pagesLimit
              ? "movies-card-list__more-button movies-card-list__more-button_hidden"
              : ""
          }`}
          onClick={paginationHandler}
        >
          Ещё
        </button>
      </div>
    </section>
  );
}

export default MoviesCardList;
