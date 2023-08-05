import "./Burger.css";
import burgerIcon from "../../images/burger.svg";
import burgerWiteIcon from "../../images/burger-white.svg";
import burgerCrossIcon from "../../images/burger-cross.svg";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Burger() {
  const location = useLocation().pathname;
  const [burgerActive, setBurgerActive] = useState(false);
  useEffect(() => {
    setBurgerActive(false);
  }, [location]);
  const burgerHandler = () => {
    setBurgerActive((prev) => !prev);
  };
  return (
    <div className={`burger ${burgerActive ? "burger_visible" : ""}`}>
      <div className='burger__logo'>
        <Logo />
      </div>
      <button
        className={`burger__button ${
          burgerActive ? "burger__button_type_cross" : ""
        }`}
        onClick={burgerHandler}
      >
        <img
          className='burger__button-icon'
          src={
            burgerActive
              ? burgerCrossIcon
              : location === "/"
              ? burgerWiteIcon
              : burgerIcon
          }
          alt='burger menu'
        />
      </button>
      <div
        className={`burger__container ${
          burgerActive ? "burger__container_active" : ""
        }`}
      >
        {burgerActive && (
          <nav className='burger__nav'>
            <Navigation logined={true} burgerActive={true} />
          </nav>
        )}
      </div>
    </div>
  );
}

export default Burger;
