import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useState } from "react";
import { useEffect } from "react";

function MoviesCardList({ movies }) {
  const [pages, setPages] = useState(0);
  const [slicedMovies, setSlicedMovies] = useState(
    movies.slice(pages, pages + 16)
  );
  const paginationHandler = () => {
    setPages((prev) => prev + 16);
  };
  useEffect(() => {
    setSlicedMovies(movies.slice(pages, pages + 16));
  }, [pages]);
  return (
    <section className='movies-card-list'>
      {slicedMovies.map((movie) => {
        return <MoviesCard movie={movie} key={Math.random() * 1000} />;
      })}
      <div className='movies-card-list__more_button-wrapper'>
        <button
          className={`movies-card-list__more-button ${
            movies.length - pages < 16
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
