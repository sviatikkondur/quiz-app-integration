import React from 'react';
import styles from './button.module.scss';
import classNames from 'classnames';
import { sendTestResult } from '@/utils/api/sendTestResult';

type Props = {
  variant: string;
};

export const Button: React.FC<Props> = ({ variant }) => {
  const handleClick = async () => {
    try {
      await sendTestResult(variant);

      console.log('Test result received');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button
      className={classNames(styles.cta, styles[variant])}
      type='submit'
      onClick={handleClick}
    >
      Get my plan
    </button>
  );
};
