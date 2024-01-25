import React from 'react';
import styles from './benefits.module.scss';
import Image from 'next/image';
import checkIcon from '../../../../../public/icons/Check.svg';
import { benefits } from '@/app/utils/data/benefits';

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
