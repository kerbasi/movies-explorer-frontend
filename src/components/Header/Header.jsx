import "./Header.css";
import { useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

function Header() {
  const location = useLocation().pathname;
  const className = `header ${
    location !== "/" ? "header header_type_white" : ""
  } `;
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
