import "./Footer.css";

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__wrapper'>
        <h2 className='footer__title'>
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h2>
        <div className='footer__two-rows-wrapper'>
          <p className='footer__text'>© 2023</p>
          <nav className='footer__nav'>
            <ul className='footer__list'>
              <li className='footer__item'>
                <a
                  className='footer__link'
                  href='https://practicum.yandex.ru/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Яндекс.Практикум
                </a>
              </li>
              <li className='footer__item'>
                <a
                  className='footer__link'
                  href='https://github.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Github
                </a>
              </li>
              <li className='footer__item'></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
