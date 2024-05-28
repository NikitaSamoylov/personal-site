import { Button } from '@/ui/button';
import styles from './HeroBtns.module.scss';

const btnsTitles: string[] = [
  'обо мне',
  'проекты',
  'резюме',
  'связаться'
];

const HeroBtns: React.FC = () => {

  return (
    <ul className={ styles.hero__btns }>
      {
        btnsTitles.map(el => {
          return (
            <li key={ el }
              className={ styles.hero__item }
            >
              <Button
                title={ el }
                width={ '339px' }
              />
            </li>
          )
        })
      }
    </ul>
  )
};

export { HeroBtns };