import NextImage from 'next/image';
import { Accordeon } from '@/ui/button/accordeon';
import styles from './About.module.scss';

import layoutImg from './react-course.png';
import JSImg from './js-course.png';
import JSAdvancedImg from './js-advanced.png';

const accordeonChildren = [
  {
    num: 0,
    title: 'Верстальщик сайтов - курс Михаила Непомнящего',
    descr: <NextImage
      src={ layoutImg }
      fill={ true }
      alt='курс Верстальщик'
    />,
    btn: '+'
  },
  {
    num: 1,
    title: 'Javascript - полный курс с 0 до результата Ивана Петриченко',
    descr: <NextImage
      src={ JSImg }
      fill={ true }
      alt='курс javascript'
    />,
    btn: '+'
  },
  {
    num: 2,
    title: 'Javascript Advanced - курс Антона Ларичева',
    descr: <NextImage
      src={ JSAdvancedImg }
      fill={ true }
      alt='курс javascript advanced'
    />,
    btn: '+'
  },
];

const About: React.FC = () => {

  return (
    <div className='container'>
      <div className={ styles.about__about }>
        <h1 className={ styles.about__title }>
          Привет,
        </h1>
        <h2 className={ styles.about__subtitle }>
          меня зовут Никита
        </h2>
        <p className={ styles.about__description }>
          Делаю сайты на Javascript, Typescript и скоростные веб-приложения.
        </p>
        <p className={ styles.about__description }>
          Работаю с технологиями:
        </p>
        <ul style={ {
          listStyleType: 'disc',
          paddingLeft: '23px',
          marginBottom: '23px'
        } }>
          <li className={ styles.about__description_skill }>
            библиотекой React.js
          </li>
          <li className={ styles.about__description_skill }>
            фреймворком Next.js
          </li>
          <li className={ styles.about__description_skill }>
            менеджером состояний Redux-Toolkit
          </li>
          <li className={ styles.about__description_skill }>
            CSS-модулями с препроцессором SCSS
          </li>
          <li className={ styles.about__description_skill }>
            компонентами UI-библиотеки Ant Design
          </li>
          <li className={ styles.about__description_skill }>
            сборщиком Webpack
          </li>
          <li className={ styles.about__description_skill }>
            Git/GitHub
          </li>
        </ul>
        <p className={ styles.about__description }>
          Еще писал приложение на классовых
          компонентах React,
          styled-components
          и имею опыт с  Redux.
        </p>
        <p className={ styles.about__description }>
          Разработал и задеплоил приложение с полным стеком
          на Next.js с ORM Mongoose и базой
          данных MongoDB. Приложение развернул
          из Docker-образов на VPS-сервере Timeweb.
        </p>
        <p className={ styles.about__description }>
          Возьмусь за исправление багов, разработку
          и изменение элементов, логики компонентов.
          Буду рад и задачам посложнее.  К сожалению,
          помочь не смогу, если нужен полностью
          самостоятельный фронтендер, в этом случае
          рекомендовал бы присмотреться к разработчику
          опытнее.
        </p>
        <p className={ styles.about__description }>
          Убежден: любая задача выполнима, если приложить
          достаточно усилий. Вот при деплое приложения
          из Docker-образов была сложность с подключением
          к базе данных: ответ от сервера со статусом 500,
          и спустя 15 часов приложение опубликовано и работает.
        </p>
        <p className={ styles.about__description }>
          Разрабатываю сайты и приложения уже дольше полутора лет,
          мне просто нравится то, что я делаю.
        </p>
      </div>
      <div>
        <h2 className={ styles.education__title }>
          обучение
        </h2>
        <p className={ styles.about__description }>
          Последние 5 месяцев считаю лучшим подходом
          в освоении технологии - сразу на проекте.
          Со специализированными запросами в Гугл по
          задаче и обращением к первоисточнику-документации.
        </p>
        <p className={ styles.about__description }>
          Периодически изучаю курсы на Udemy, Stepik
          и YouTube. Они структурируют представление
          о технологиях.
        </p>
        <div className={ styles.about__accordeon }>
          <Accordeon data={ accordeonChildren } />
        </div>
      </div>
    </div>
  )
};

export { About };