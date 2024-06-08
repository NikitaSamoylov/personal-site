'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Nav.module.scss';

const nav = [
  { title: 'главная', link: '/' },
  { title: 'обо мне', link: '/about' },
  { title: 'проекты', link: '/projects' },
  { title: 'резюме', link: 'https://drive.google.com/file/d/1BfIeLfnjeb4f514pR8QbJM7I3M8gBJe7/view?usp=drive_link' },
  { title: 'связаться', link: '/contacts' },
];

const Nav: React.FC = () => {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  return (
    <ul className={ styles.nav }>
      {
        nav.map(el => {
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
  )
};

export { Nav };