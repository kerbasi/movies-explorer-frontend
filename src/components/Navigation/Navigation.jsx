import "./Navigation.css";
import accountLogo from "../../images/account.svg";
import { Link, NavLink, useLocation } from "react-router-dom";

function Navigation({ logined, burgerActive }) {
  const location = useLocation().pathname;
  return (
    <nav className='navigation'>
      {(location === "/movies" ||
        location === "/saved-movies" ||
        location === "/profile") && (
        <div className='navigation__links-wrapper'>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "navigation__link navigation__link_active"
                : "navigation__link"
            }
            to='/movies'
          >
            Фильмы
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "navigation__link navigation__link_active"
                : "navigation__link"
            }
            to='/saved-movies'
          >
            Сохранённые фильмы
          </NavLink>
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
    </nav>
  );
}

export default Navigation;
