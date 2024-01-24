import React from 'react';
import styles from './progress.module.scss';
import Image from 'next/image';
import diagram from './icons/diagram.svg';

export const ProgressSlide = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          See your Spiritual Growth progress by Sep 17, 2024
        </h2>
        <div>
          <Image
            src={diagram}
            alt='diagram'
          />
        </div>
      </div>

      <button
        type='button'
        className={styles.CTA}
      >
        Continue
      </button>
    </section>
  );
};
