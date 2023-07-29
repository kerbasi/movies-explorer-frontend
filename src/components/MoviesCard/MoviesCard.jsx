import "./MoviesCard.css";
import save from "../../images/save.svg";
import saved from "../../images/saved.svg";

function MoviesCard({ movie }) {
  return (
    <li className='movies-card'>
      <img className='movies-card__image' src={movie.img} alt='movie' />
      <div className='movies-card__line-wrapper'>
        <h3 className='movies-card__title'>{movie.title}</h3>
        <button className='movies-card__save-button'>
          <img
            className='movies-card__save-button-image'
            src={movie.saved ? saved : save}
            alt='save button'
          />
        </button>
      </div>
      <p className='movies-card__duration'>{movie.duration}</p>
    </li>
  );
}

export default MoviesCard;
