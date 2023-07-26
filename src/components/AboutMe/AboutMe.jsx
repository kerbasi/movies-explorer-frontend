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
              Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет
              экономики СГУ. У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю
              слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить.
              С 2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;.
              После того, как прошёл курс по веб&#8209;разработке, начал
              заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
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
