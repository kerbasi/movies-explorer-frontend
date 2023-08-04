import "./Portfolio.css";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <div className='portfolio'>
      <h4 className='portfolio__title'>Портфолио</h4>
      <ul className='portfolio__list'>
        <li className='portfolio__list-item'>
          <Link
            className='portfolio__link hover hover_type_link'
            to='https://kerbasi.github.io/how-to-learn/'
            target='_blank'
            rel='noreferrer'
          >
            <p className='portfolio__text'>Статичный сайт</p>
            <p className='portfolio__text portfolio__text_downed'>↗</p>
          </Link>
        </li>
        <li className='portfolio__list-item'>
          <Link
            className='portfolio__link hover hover_type_link'
            to='https://kerbasi.github.io/russian-travel/'
            target='_blank'
            rel='noreferrer'
          >
            <p className='portfolio__text'>Адаптивный сайт</p>
            <p className='portfolio__text portfolio__text_downed'>↗</p>
          </Link>
        </li>
        <li className='portfolio__list-item'>
          <Link
            className='portfolio__link hover hover_type_link'
            to='https://github.com/kerbasi/react-mesto-api-full-gha'
            target='_blank'
            rel='noreferrer'
          >
            <p className='portfolio__text'>Одностраничное приложение</p>
            <p className='portfolio__text portfolio__text_downed'>↗</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
