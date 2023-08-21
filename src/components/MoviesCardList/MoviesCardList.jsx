import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useState } from "react";
import { useEffect } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";

function MoviesCardList({
  movies,
  isError,
  query,
  handleSaveMovie,
  savedMovies,
  handleDeleteMovie,
}) {
  const isWidthExtraLarge = useMediaQuery("1280px");
  const isWidthLarge = useMediaQuery("955px");
  const isWidthMedium = useMediaQuery("768px");

  const [addPages, setAddPages] = useState(0);
  const [pagesLimit, setPagesLimit] = useState(0);
  const [slicedMovies, setSlicedMovies] = useState([]);

  const paginationHandler = () => {
    setPagesLimit((prev) => prev + addPages);
  };

  useEffect(() => {
    if (isWidthExtraLarge) {
      setPagesLimit(16);
      setAddPages(4);
    } else if (isWidthLarge) {
      setPagesLimit(12);
      setAddPages(3);
    } else if (isWidthMedium) {
      setPagesLimit(8);
      setAddPages(2);
    } else {
      setPagesLimit(5);
      setAddPages(2);
    }
  }, [isWidthLarge, isWidthMedium, isWidthExtraLarge, query]);

  useEffect(() => {
    setSlicedMovies(movies.slice(0, pagesLimit));
  }, [movies, pagesLimit]);
  return (
    <section className='movies-card-list'>
      {isError || !movies.length ? (
        <div className='movies-card-list__error'>
          {isError
            ? "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
            : query
            ? "Ничего не найдено"
            : ""}
        </div>
      ) : (
        <>
          <ul className='movies-card-list__wrapper'>
            {slicedMovies.map((movie) => {
              return (
                <MoviesCard
                  movie={movie}
                  key={movie.id ? movie.id : movie.movieId}
                  handleSaveMovie={handleSaveMovie}
                  handleDeleteMovie={handleDeleteMovie}
                  savedMovies={savedMovies}
                />
              );
            })}
          </ul>
          <div className='movies-card-list__more_button-wrapper'>
            <button
              className={`movies-card-list__more-button hover hover_type_button ${
                movies.length < pagesLimit
                  ? "movies-card-list__more-button movies-card-list__more-button_hidden"
                  : ""
              }`}
              onClick={paginationHandler}
            >
              Ещё
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
