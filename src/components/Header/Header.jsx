import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

function Header() {
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <Logo />
        <Link className='header__link' to='/signup'>
          Регистрация
        </Link>
        <Link className='header__link header__link_type_login' to='/signin'>
          Войти
        </Link>
      </div>
    </header>
  );
}

export default Header;
