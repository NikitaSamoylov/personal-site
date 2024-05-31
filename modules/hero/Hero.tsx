import NextImage from 'next/image';
import { HeroBtns } from '@/components/hero-btns';
import styles from './Hero.module.scss';

import Img from './main-img.png';
import imgMobile from './mobile-img.jpg';

const Hero: React.FC = () => {
  return (
    <div className='container'>
      <div className={ styles.hero__content }>
        <NextImage
          src={ Img }
          width={ Img.width }
          height={ Img.height }
          alt='Никита Самойлов'
          priority
          className={ styles.hero__img }
          quality={ 100 }
        />
        <NextImage
          src={ imgMobile }
          width={ imgMobile.width }
          height={ imgMobile.height }
          alt='Никита Самойлов'
          priority
          className={ styles.hero__img_mobile }
          quality={ 100 }
        />
        <div className={ styles.hero__text }>
          <span className={ styles.hero__pretitle }>
            Привет,
          </span>
          <h1 className={ styles.hero__title }>
            я - Никита
          </h1>
          <p className={ styles.hero__description }>
            фронтенд - разработчик на react / next
          </p>
          <div>
            <HeroBtns />
          </div>
        </div>
      </div>
    </div>
  )
};

export { Hero };