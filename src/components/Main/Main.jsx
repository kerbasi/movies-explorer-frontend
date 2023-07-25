import "./Main.css";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";

function Main() {
  return (
    <div className='main'>
      <Header />
      <Promo />
      <NavTab />
      <AboutProject />
    </div>
  );
}

export default Main;
