import React from 'react';
import styles from './stats.module.scss';
import { stats } from '@/app/fakeApi/stats';

export const Stats = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.subtitle}>People just like you achieved great results with App!</h2>

      <ul className={styles.list}>
        {stats.map((stat) => (
          <li
            key={stat.id}
            className={styles.listItem}
          >
            <div className={styles.percentage}>{`${stat.percentage}%`}</div>
            <p className={styles.content}>{stat.content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
