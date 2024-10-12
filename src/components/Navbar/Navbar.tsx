import Logo from '../../assets/logo.png';
import React from 'react';
import styles from './Navbar.module.scss';
import { APP_HEADING } from '../../utils/constants'

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar-logo']}>
        <img src={Logo} alt="Logo" className={styles['logo']} />
      </div>
      <h2>{APP_HEADING}</h2>
    </nav>
  );
};

export default React.memo(Navbar);
