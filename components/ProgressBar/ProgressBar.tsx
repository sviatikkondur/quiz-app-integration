'use client';

import React from 'react';
import styles from './progress.module.scss';
import classNames from 'classnames';

type Props = {
  value: number;
}

export const ProgressBar: React.FC<Props> = ({ value }) => {

  return (
    <div className={styles.wrapper}>
      <p
        className={classNames(styles.percentage, {
          [styles.white]: value >= 50,
        })}
      >{`${value}%`}</p>
      <progress
        className={styles.progressBar}
        value={value}
        max={100}
      >
        {`${value}%`}
      </progress>
    </div>
  );
};
