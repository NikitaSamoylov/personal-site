'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Animated } from "react-animated-css";
import { VscMenu } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";
import { usePathname } from 'next/navigation';
import styles from './MobileNav.module.scss';

const nav = [
  { title: 'главная', link: '/' },
  { title: 'обо мне', link: '/about' },
  { title: 'проекты', link: '/projects' },
  { title: 'резюме', link: 'https://drive.google.com/file/d/1BfIeLfnjeb4f514pR8QbJM7I3M8gBJe7/view?usp=drive_link' },
  { title: 'связаться', link: '/contacts' },
];

const MobileNav: React.FC = () => {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className={ styles.nav__icon }
        color="black"
        onClick={ () => setMenu(menu => !menu) }
      >
        <VscMenu size={ 30 } />
      </div>
      <div className={
        menu ?
          styles.nav :
          styles.nav__hidden
      }>
        <div className={ styles.nav__icon_close }
          onClick={ () => setMenu(menu => !menu) }
        >
          <AiOutlineClose size={ 30 }
            color='white'
          />
        </div>
        <ul className={ styles.nav__content }>
          {
            menu && nav.map(el => {
              return (
                <li className={ styles.nav__item }
                  key={ el.title }
                >
                  <Link key={ el.title }
                    href={ el.link }
                    className={
                      isActive(el.link) ?
                        `
                      ${ styles.nav__link_active }
                      ${ styles.nav__link }` :
                        styles.nav__link
                    }
                  >
                    { el.title }
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    </>
  )
};

export { MobileNav };