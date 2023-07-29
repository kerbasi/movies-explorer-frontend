import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useState } from "react";

function MoviesCardList({ movies }) {
  const [slicedMovies, setSlicedMovies] = useState(movies.slice(0, 16));

  return (
    <section className='movies-card-list'>
      {slicedMovies.map((movie) => {
        return <MoviesCard movie={movie} key={Math.random() * 1000} />;
      })}
      <div className='movies-card-list__more_button-wrapper'>
        <button
          className={`movies-card-list__more-button ${
            movies.length <= 16
              ? "movies-card-list__more-button movies-card-list__more-button_hidden"
              : ""
          }`}
        >
          Ещё
        </button>
      </div>
    </section>
  );
}

export default MoviesCardList;
