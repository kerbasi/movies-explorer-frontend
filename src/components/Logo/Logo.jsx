import "./Logo.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Logo() {
  // return <img className='logo' src={logo} alt='logo' />;
  return (
    <div className='logo'>
      <Link className='logo__link' to='/'>
        <img className='logo__img' src={logo} alt='logo' />
      </Link>
    </div>
  );
}

export default Logo;
