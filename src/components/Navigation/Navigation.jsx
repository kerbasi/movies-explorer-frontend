import "./Navigation.css";
import accountLogo from "../../images/account.svg";
import { Link, NavLink, useLocation } from "react-router-dom";

function Navigation({ burgerActive }) {
  const location = useLocation().pathname;
  const navigationClassName = `navigation ${
    burgerActive ? "navigation_type_burger" : ""
  }`;
  const navigationLinkClassName = `navigation__link ${
    burgerActive ? "navigation__link_type_burger" : ""
  }`;
  const navigationActiveLinkClassName = `navigation__link ${
    burgerActive
      ? "navigation__link_type_burger navigation__link_burger-active"
      : "navigation__link_active"
  }`;
  const navigationWrapperClassName = `navigation__links-wrapper ${
    burgerActive
      ? "navigation__links-wrapper_type_burger"
      : location === "/"
      ? "navigation__links-wrapper_type_main"
      : ""
  }`;
  const navigationProfileLinkClassName = `navigation__link ${
    burgerActive
      ? "navigation__link_type_profile navigation__link_type_profile-burger"
      : location === "/"
      ? " navigation__link_type_profile navigation__link_type_profile-main"
      : "navigation__link_type_profile"
  }`;
  return (
    <nav className={navigationClassName}>
      <div className={navigationWrapperClassName}>
        {burgerActive && (
          <NavLink
            className={({ isActive }) =>
              isActive ? navigationActiveLinkClassName : navigationLinkClassName
            }
            to='/'
          >
            Главная
          </NavLink>
        )}
        <NavLink
          className={({ isActive }) =>
            isActive ? navigationActiveLinkClassName : navigationLinkClassName
          }
          to='/movies'
        >
          Фильмы
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? navigationActiveLinkClassName : navigationLinkClassName
          }
          to='/saved-movies'
        >
          Сохранённые фильмы
        </NavLink>
      </div>

      <>
        <Link className={navigationProfileLinkClassName} to='/profile'>
          {location === "/" && !burgerActive ? (
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
    </nav>
  );
}

export default Navigation;
