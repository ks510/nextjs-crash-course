import styles from '../styles/Layout.module.scss';
import React, { FC } from 'react';
import Nav from './Nav';
import Header from './Header';
import Meta from './Meta';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;