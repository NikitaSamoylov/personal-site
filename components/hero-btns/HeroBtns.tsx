'use client';
import Link from 'next/link';
import { Button } from '@/ui/button';
import styles from './HeroBtns.module.scss';

const btnsTitles = [
  { title: 'обо мне', link: '/about' },
  { title: 'проекты', link: '/projects' },
  { title: 'резюме', link: 'https://drive.google.com/file/d/1BfIeLfnjeb4f514pR8QbJM7I3M8gBJe7/view?usp=drive_link' },
  { title: 'связаться', link: '/contacts' },
];

const HeroBtns: React.FC = () => {

  return (
    <ul className={ styles.hero__btns }>
      {
        btnsTitles.map(el => {
          return (
            <li key={ el.title }
              className={ styles.hero__item }
            >
              <Link href={ el.link }>
                <Button
                  title={ el.title }
                  width={ '339px' }
                />
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
};

export { HeroBtns };