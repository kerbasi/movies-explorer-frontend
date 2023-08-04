import "./NavTab.css";
import { HashLink as Link } from "react-router-hash-link";

function NavTab() {
  return (
    <nav className='nav-tab'>
      <div className='nav-tab__wrapper'>
        <Link className='nav-tab__link hover-link' to='/#about_project'>
          О проекте
        </Link>
        <Link className='nav-tab__link hover-link' to='/#about_techs'>
          Технологии
        </Link>
        <Link className='nav-tab__link hover-link' to='/#about-student'>
          Студент
        </Link>
      </div>
    </nav>
  );
}

export default NavTab;
