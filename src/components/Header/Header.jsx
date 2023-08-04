import "./Header.css";
import { useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Burger from "../Burger/Burger";
import { useMediaQuery } from "../../hooks/useMediaQuery";

function Header({ logined, setLogined }) {
  const location = useLocation().pathname;
  const className = `header ${
    location !== "/" ? "header header_type_white" : ""
  } `;
  const isWidthLarge = useMediaQuery("900px");
  return (
    <header className={className}>
      <div className='header__wrapper'>
        <Logo />
        {!logined || isWidthLarge ? (
          <Navigation logined={logined} setLogined={setLogined} />
        ) : (
          <Burger />
        )}
      </div>
    </header>
  );
}

export default Header;
