import "./MoviesCard.css";
import save from "../../images/save.svg";
import saved from "../../images/saved.svg";
import cross from "../../images/delete.svg";
import { Link, useLocation } from "react-router-dom";
import { MOVIES_URL } from "../../utils/constants";
import { calculateDuration } from "../../utils/utils";
import { useEffect, useState } from "react";

function MoviesCard({
  movie,
  handleSaveMovie,
  savedMovies,
  handleDeleteMovie,
}) {
  const location = useLocation().pathname;
  const [isSaved, setIsSaved] = useState(false);
  useEffect(() => {
    if (
      savedMovies.find(
        (item) => item.movieId === movie.id || item.movieId === movie.movieId
      )
    ) {
      setIsSaved(true);
    } else {
      setIsSaved(false);
    }
  }, [savedMovies, movie]);
  const handleSave = () => {
    handleSaveMovie(movie);
  };
  const handleDelete = () => {
    handleDeleteMovie(movie.id ? movie.id : movie.movieId);
  };
  return (
    <li className='movies-card'>
      <Link
        className='movies-card__link'
        to={movie.trailerLink}
        target='_blank'
      >
        <img
          className='movies-card__image'
          src={movie.imgage ? `${MOVIES_URL + movie.image.url}` : movie.img}
          alt='movie'
        />
      </Link>
      <div className='movies-card__line-wrapper'>
        <h3 className='movies-card__title'>{movie.nameRU}</h3>
        <button
          className={`movies-card__button hover hover_type_button ${
            location === "/saved-movies" ? "movies-card__button_type_cross" : ""
          }`}
          onClick={isSaved ? handleDelete : handleSave}
        >
          <img
            className='movies-card__button-image'
            src={isSaved ? (location === "/movies" ? saved : cross) : save}
            alt='save button'
          />
        </button>
      </div>
      <p className='movies-card__duration'>
        {calculateDuration(movie.duration)}
      </p>
    </li>
  );
}

export default MoviesCard;
