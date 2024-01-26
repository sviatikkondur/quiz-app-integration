import React, { useState } from 'react';
import styles from './progress.module.scss';
import { QuizStatus } from '@/types/TQuiz';
import { useAppDispatch } from '@/hooks/useTypedSelector';
import { sendQuizResults } from '@/app/components/Quiz/api/api';
import { changeStatus } from '@/store/features/quiz/quizSlice';
import { Loader } from '../../Loader/Loader';

type Props = {
  email: string;
};

export const ProgressSlide: React.FC<Props> = ({ email }) => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useAppDispatch();

  const handleClick = async () => {
    try {
      setIsLoading(true);
      await sendQuizResults(email);

      dispatch(changeStatus(QuizStatus.Finished));
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loader />;
  }
  
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          See your Spiritual Growth progress by Sep 17, 2024
        </h2>
        <div className={styles.diagram} />
      </div>

      <button
        type='button'
        className={styles.CTA}
        onClick={handleClick}
      >
        Continue
      </button>
    </section>
  );
};
