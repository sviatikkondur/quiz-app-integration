import React from 'react';
import backIcon from '../../../public/icons/back.svg';
import menuIcon from '../../../public/icons/menu.svg';
import Image from 'next/image';
import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <button
        aria-label='Go back'
        className={styles.iconButton}
      >
        <Image
          src={backIcon}
          alt='Go back icon'
        />
      </button>

      <p className={styles.logo}>App</p>

      <button
        aria-label='Open menu'
        className={styles.iconButton}
      >
        <Image
          src={menuIcon}
          alt='Open menu icon'
        />
      </button>
    </header>
  );
};
