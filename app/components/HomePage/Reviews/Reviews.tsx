import { reviews } from '@/app/utils/data/reviews';
import React from 'react';
import styles from './reviews.module.scss';
import { formatDate } from '@/app/utils/formatDate';
import { Stars } from '@/app/components/Stars/Stars';

export const Reviews = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.subtitle}>Users love App!</h2>

      {reviews.map((review) => (
        <article
          key={review.id}
          className={styles.review}
        >
          <div className={styles.reviewHeader}>
            <div className={styles.reviewDetails}>
              <p className={styles.reviewAuthor}>{review.author}</p>
              <p className={styles.reviewDate}>{formatDate(review.date)}</p>
            </div>
            {<Stars rating={review.rating} />}
          </div>
          <p className={styles.message}>{review.message}</p>
        </article>
      ))}
    </section>
  );
};
