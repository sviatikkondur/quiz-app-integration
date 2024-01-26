import React from 'react';
import styles from './benefits.module.scss';
import Image from 'next/image';
import checkIcon from '../../../public/icons/сheck.svg';
import { benefits } from '@/mockData/benefits';

export const Benefits = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.subtitle}>What you get</h2>

      <ul className={styles.list}>
        {benefits.map((benefit) => (
          <li
            key={benefit.id}
            className={styles.listItem}
          >
            <Image
              src={checkIcon}
              alt='check icon'
            />
            {benefit.content}
          </li>
        ))}
      </ul>
    </section>
  );
};
