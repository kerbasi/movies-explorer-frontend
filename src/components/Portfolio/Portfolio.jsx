import "./Portfolio.css";

function Portfolio() {
  return (
    <div className='portfolio'>
      <h4 className='portfolio__title'>Портфолио</h4>
      <ul className='portfolio__list'>
        <li className='portfolio__list-item'>
          <a
            className='portfolio__link'
            href='https://ya.ru'
            target='_blank'
            rel='noreferrer'
          >
            <p className='portfolio__text'>Статичный сайт</p>
            <p className='portfolio__text portfolio__text_downed'>↗</p>
          </a>
        </li>
        <li className='portfolio__list-item'>
          <a
            className='portfolio__link'
            href='https://ya.ru'
            target='_blank'
            rel='noreferrer'
          >
            <p className='portfolio__text'>Адаптивный сайт</p>
            <p className='portfolio__text portfolio__text_downed'>↗</p>
          </a>
        </li>
        <li className='portfolio__list-item'>
          <a
            className='portfolio__link'
            href='https://ya.ru'
            target='_blank'
            rel='noreferrer'
          >
            <p className='portfolio__text'>Одностраничное приложение</p>
            <p className='portfolio__text portfolio__text_downed'>↗</p>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
