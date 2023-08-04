import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useState } from "react";
import { useEffect } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";

function MoviesCardList({ movies }) {
  const [addPages, setAddPages] = useState(0);
  const [pagesLimit, setPagesLimit] = useState(0);
  const [slicedMovies, setSlicedMovies] = useState([]);
  const paginationHandler = () => {
    setPagesLimit((prev) => prev + addPages);
  };
  const isWidthLarge = useMediaQuery("950px");
  const isWidthMedium = useMediaQuery("768px");
  useEffect(() => {
    console.log(isWidthLarge, isWidthMedium);
    if (isWidthLarge) {
      setAddPages(16);
    } else if (isWidthMedium) {
      setAddPages(8);
    } else {
      setAddPages(5);
    }
  }, [isWidthLarge, isWidthMedium]);
  useEffect(() => {
    setSlicedMovies(movies.slice(0, pagesLimit));
  }, [pagesLimit, movies]);
  useEffect(() => {
    setPagesLimit(addPages);
  }, [pagesLimit, addPages]);
  return (
    <section className='movies-card-list'>
      <ul className='movies-card-list__wrapper'>
        {slicedMovies.map((movie) => {
          return <MoviesCard movie={movie} key={Math.random() * 1000} />;
        })}
      </ul>
      <div className='movies-card-list__more_button-wrapper'>
        <button
          className={`movies-card-list__more-button hover-button ${
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
