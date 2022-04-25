import styles from '../styles/Layout.module.scss';
import React, { FC } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};

export default Layout;