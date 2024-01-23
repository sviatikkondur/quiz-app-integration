import React from 'react';
import styles from './progress.module.scss';

export const ProgressBar = () => {
  const progressValue = 33;

  return (
    <progress
      className={styles.progressBar}
      value={progressValue}
      max={100}
    >
      {`${progressValue}%`}
    </progress>
  );
};
