import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import accountLogo from "../../images/account.svg";
import { useState } from "react";

function Header() {
  const [logined, setLogined] = useState(true);
  const location = useLocation().pathname;
  const className = location === "/" ? "header" : "header header_type_white";
  return (
    <header className={className}>
      <div className='header__wrapper'>
        <Logo />
        {(location === "/movies" || location === "/saved-movies") && (
          <div className='header__links-wrapper'>
            <Link
              className={`header__link ${
                location === "/movies" ? "header__link_active" : ""
              }`}
              to='/movies'
            >
              Фильмы
            </Link>
            <Link
              className={`header__link ${
                location === "/saved-movies" ? "header__link_active" : ""
              }`}
              to='/saved-movies'
            >
              Сохранённые фильмы
            </Link>
          </div>
        )}
        {location === "/" && logined && (
          <div className='header__links-wrapper header__links-wrapper_type_main'>
            <Link className='header__link' to='/movies'>
              Фильмы
            </Link>
            <Link className='header__link' to='/saved-movies'>
              Сохранённые фильмы
            </Link>
          </div>
        )}
        {logined && (
          <>
            <Link
              className={`header__link ${
                location === "/"
                  ? " header__link_type_profile header__link_type_profile-main"
                  : "header__link_type_profile"
              }`}
              to='/profile'
            >
              {location === "/" ? (
                <img
                  className='header__account-logo'
                  src={accountLogo}
                  alt='account'
                />
              ) : (
                ""
              )}
              Аккаунт
            </Link>
          </>
        )}
        {!logined && (
          <>
            <Link
              className='header__link header__link_type_signup'
              to='/signup'
            >
              Регистрация
            </Link>
            <Link className='header__link header__link_type_login' to='/signin'>
              Войти
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
