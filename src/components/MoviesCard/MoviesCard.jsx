import "./MoviesCard.css";
import save from "../../images/save.svg";
import saved from "../../images/saved.svg";
import cross from "../../images/delete.svg";
import { useLocation } from "react-router-dom";

function MoviesCard({ movie }) {
  const location = useLocation().pathname;
  return (
    <li className='movies-card'>
      <img className='movies-card__image' src={movie.img} alt='movie' />
      <div className='movies-card__line-wrapper'>
        <h3 className='movies-card__title'>{movie.title}</h3>
        <button
          className={`movies-card__button ${
            location === "/saved-movies" ? "movies-card__button_type_cross" : ""
          }`}
        >
          <img
            className='movies-card__button-image'
            src={movie.saved ? (location === "/movies" ? saved : cross) : save}
            alt='save button'
          />
        </button>
      </div>
      <p className='movies-card__duration'>{movie.duration}</p>
    </li>
  );
}

export default MoviesCard;
