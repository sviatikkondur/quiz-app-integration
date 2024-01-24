'use client';

import React from 'react';
import styles from './crafting.module.scss';
import Image from 'next/image';
import goals from './icons/goals.svg';
import answers from './icons/answers.svg';
import picking from './icons/picking.svg';
import finalizing from './icons/finalizing.svg';

export const CraftingSlide = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>
        We are crafting your spiritual growth plan
      </h1>

      <div className={styles.progress}>
        <p className={styles.progressPercentage}>87%</p>
      </div>

      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Image
            src={goals}
            alt='icon'
          />
          <p className={styles.listItemText}>Aligning with your goals</p>
        </li>
        <li className={styles.listItem}>
          <Image
            src={answers}
            alt='icon'
          />
          <p className={styles.listItemText}>Reviewing your answers</p>
        </li>
        <li className={styles.listItem}>
          <Image
            src={picking}
            alt='icon'
          />
          <p className={styles.listItemText}>
            Picking Bible verses and prayers for you
          </p>
        </li>
        <li className={styles.listItem}>
          <Image
            src={finalizing}
            alt='icon'
          />
          <p className={styles.listItemText}>
            Finalizing your personalized plan
          </p>
        </li>
      </ul>
    </section>
  );
};
