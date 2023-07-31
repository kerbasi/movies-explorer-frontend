import "./Burger.css";
import burgerIcon from "../../images/burger.svg";
import burgerWiteIcon from "../../images/burger-white.svg";
import burgerCrossIcon from "../../images/burger-cross.svg";
import Navigation from "../Navigation/Navigation";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function Burger() {
  const location = useLocation().pathname;
  const [burgerActive, setBurgerActive] = useState(false);
  const burgerHandler = () => {
    setBurgerActive((prev) => !prev);
  };
  return (
    <div className={`burger ${burgerActive ? "burger_visible" : ""}`}>
      <button className='burger__button' onClick={burgerHandler}>
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
        <nav className='burger__nav'>{/* <Navigation /> */}</nav>
      </div>
    </div>
  );
}

export default Burger;
