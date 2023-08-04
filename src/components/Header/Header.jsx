import "./Header.css";
import { useLocation, Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Burger from "../Burger/Burger";
import useWindowDimensions from "../../hooks/useWindowDimensions";

function Header({ logined, setLogined }) {
  const { width } = useWindowDimensions();
  const location = useLocation().pathname;
  const className = `header ${
    location !== "/" ? "header header_type_white" : ""
  } `;
  return (
    <header className={className}>
      <div className='header__wrapper'>
        <Logo />
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
        {width > 900 && logined && (
          <Navigation logined={logined} setLogined={setLogined} />
        )}
        {width <= 900 && logined && <Burger />}
      </div>
    </header>
  );
}

export default Header;
