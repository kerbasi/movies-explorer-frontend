import "./Navigation.css";
import accountLogo from "../../images/account.svg";
import { Link, useLocation } from "react-router-dom";

function Navigation({ logined }) {
  const location = useLocation().pathname;

  return (
    <nav className='navigation'>
      {(location === "/movies" ||
        location === "/saved-movies" ||
        location === "/profile") && (
        <div className='navigation__links-wrapper'>
          <Link
            className={`navigation__link ${
              location === "/movies" ? "navigation__link_active" : ""
            }`}
            to='/movies'
          >
            Фильмы
          </Link>
          <Link
            className={`navigation__link ${
              location === "/saved-movies" ? "navigation__link_active" : ""
            }`}
            to='/saved-movies'
          >
            Сохранённые фильмы
          </Link>
        </div>
      )}
      {location === "/" && logined && (
        <div className='navigation__links-wrapper navigation__links-wrapper_type_main'>
          <Link className='navigation__link' to='/movies'>
            Фильмы
          </Link>
          <Link className='navigation__link' to='/saved-movies'>
            Сохранённые фильмы
          </Link>
        </div>
      )}
      {logined && (
        <>
          <Link
            className={`navigation__link ${
              location === "/"
                ? " navigation__link_type_profile navigation__link_type_profile-main"
                : "navigation__link_type_profile"
            }`}
            to='/profile'
          >
            {location === "/" ? (
              <img
                className='navigation__account-logo'
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
            className='navigation__link navigation__link_type_signup'
            to='/signup'
          >
            Регистрация
          </Link>
          <Link
            className='navigation__link navigation__link_type_login'
            to='/signin'
          >
            Войти
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navigation;
