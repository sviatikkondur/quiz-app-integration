'use client';

import React from 'react';
import styles from './progress.module.scss';
import { QuizStatus } from '@/types/TQuiz';
import { useAppSelector } from '@/hooks/useTypedSelector';
import classNames from 'classnames';

export const ProgressBar = () => {
  const { status } = useAppSelector((state) => state.quiz);

  const progressValue =
    status === QuizStatus.Finished ? 100 : Math.floor((status / 3) * 100);

  return (
    <div className={styles.wrapper}>
      <p
        className={classNames(styles.percentage, {
          [styles.white]: progressValue >= 50,
        })}
      >{`${progressValue}%`}</p>
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
