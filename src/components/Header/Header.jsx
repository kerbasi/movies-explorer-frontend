import "./Header.css";
import { useLocation } from "react-router-dom";
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
        {width > 900 ? (
          <Navigation logined={logined} setLogined={setLogined} />
        ) : (
          <Burger />
        )}
      </div>
    </header>
  );
}

export default Header;
