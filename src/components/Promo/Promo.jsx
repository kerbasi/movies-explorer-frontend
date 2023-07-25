import "./Promo.css";
import landingLogo from "../../images/pic__COLOR_landing-logo.svg";

function Promo() {
  return (
    <section className='promo'>
      <div className='promo__wrapper'>
        {/* <img className='promo__logo' src={landingLogo} alt='logo' /> */}
        <h1 className='promo__title'>
          Учебный проект студента факультета Веб-разработки.
        </h1>
      </div>
    </section>
  );
}

export default Promo;
