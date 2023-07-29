import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

function Header() {
  const location = useLocation().pathname;
  const className = location === "/" ? "header" : "header header_type_white";
  return (
    <header className={className}>
      <div className='header__wrapper'>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
