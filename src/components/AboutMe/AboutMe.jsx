import "./AboutMe.css";
import student from "../../images/student.png";
import Title from "../Title/Title";
import Portfolio from "../Portfolio/Portfolio";

function AboutMe() {
  return (
    <section className='about-me'>
      <div className='about-me__wrapper'>
        <Title title='Студент' />
        <div className='about-me__two-rows-wrapper'>
          <div className='about-me__description'>
            <h3 className='about-me__title'>Виталий</h3>
            <h4 className='about-me__subtitle'>Фронтенд-разработчик, 30 лет</h4>
            <p className='about-me__text'>
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <a
              className='about-me__link'
              href='https://github.com'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </div>
          <img className='about-me__photo' src={student} alt='student' />
        </div>
        <div className='about-me__portfolio'>
          <Portfolio />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
