import "./NavTab.css";
import { Link } from "react-router-dom";

function NavTab() {
  return (
    <nav className='nav-tab'>
      <div className='nav-tab__wrapper'>
        <Link className='nav-tab__link' to='/'>
          О проекте
        </Link>
        <Link className='nav-tab__link' to='/'>
          Технологии
        </Link>
        <Link className='nav-tab__link' to='/'>
          Студент
        </Link>
      </div>
    </nav>
  );
}

export default NavTab;
