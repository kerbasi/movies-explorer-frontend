import "./Header.css";
import { useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Burger from "../Burger/Burger";

function Header({ logined, setLogined, width }) {
  const location = useLocation().pathname;
  const className = `header ${
    location !== "/" ? "header header_type_white" : ""
  } `;
  return (
    <header className={className}>
      <div className='header__wrapper'>
        <Logo />
        {!logined || width > 900 ? (
          <Navigation logined={logined} setLogined={setLogined} />
        ) : (
          <Burger />
        )}
      </div>
    </header>
  );
}

export default Header;
