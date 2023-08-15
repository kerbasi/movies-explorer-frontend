import "./Footer.css";
import { Link } from "react-router-dom";

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
                <Link
                  className='footer__link hover hover_type_link'
                  to='https://practicum.yandex.ru/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Яндекс.Практикум
                </Link>
              </li>
              <li className='footer__item'>
                <Link
                  className='footer__link hover hover_type_link'
                  to='https://github.com/kerbasi'
                  target='_blank'
                  rel='noreferrer'
                >
                  Github
                </Link>
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
