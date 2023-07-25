import "./AboutProject.css";

function AboutProject() {
  return (
    <section className='about-project'>
      <div className='about-project__wrapper'>
        <h2 className='about-project__title'>О проекте</h2>
        <div className='about-project__two-col-wrapper'>
          <div className='about-project__description'>
            <div className='about-project__subtitle'>
              Дипломный проект включал 5 этапов
            </div>
            <p className='about-project__text'>
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className='about-project__description'>
            <div className='about-project__subtitle'>
              На выполнение диплома ушло 5 недель
            </div>
            <p className='about-project__text'>
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className='about-project__timing'>
          <p className='about-project__timing-section about-project__timing-section_date_1'>
            1 неделя
          </p>
          <p className='about-project__timing-section about-project__timing-section_date_2'>
            4 недели
          </p>
          <p className='about-project__timing-section'>Back-end</p>
          <p className='about-project__timing-section'>Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
