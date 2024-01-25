'use client';

import React from 'react';
import styles from './progress.module.scss';
import { useAppSelector } from '@/app/hooks/useTypedSelector';
import { QuizStatus } from '@/app/types/TQuiz';

export const ProgressBar = () => {
  const { status } = useAppSelector((state) => state.quiz);

  const progressValue =
    status === QuizStatus.Finished ? 100 : Math.floor((status / 3) * 100);

  return (
    <div className={styles.wrapper}>
      <p className={styles.percentage}>{`${progressValue}%`}</p>
      <progress
        className={styles.progressBar}
        value={progressValue}
        max={100}
      >
        {`${progressValue}%`}
      </progress>
    </div>
  );
};
