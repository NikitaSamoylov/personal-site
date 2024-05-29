import { Nav } from '@/components/nav';
import { MobileNav } from '@/components/mobile-nav';
import styles from './Header.module.scss';

const Header: React.FC = () => {

  return (
    <header className={ styles.header }>
      <div className='container'>
        <Nav />
        <MobileNav />
      </div>
    </header>
  )
};

export { Header };