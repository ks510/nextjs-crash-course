import { FC } from 'react';
import navStyles from '../styles/Nav.module.scss';
import Link from 'next/link';

const Nav: FC = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;