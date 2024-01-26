'use client';

import { useEffect } from 'react';
import styles from './page.module.scss';
import { QuizStatus } from '../types/TQuiz';
import { useRouter } from 'next/navigation';
import { Quiz } from './components/Quiz/Quiz';
import { useAppSelector } from '@/hooks/useTypedSelector';
import { ProgressBar } from './components/ProgressBar/ProgressBar';
import { getProgressValue } from '@/utils/getProgressValue';

export default function Home() {
  const { status } = useAppSelector((state) => state.quiz);
  const router = useRouter();

  useEffect(() => {
    if (status === QuizStatus.Finished) {
      router.push('/home');
    }
  }, [status, router]);

  const progressValue = getProgressValue(status);

  return (
    <main className={styles.main}>
      {<ProgressBar value={progressValue} />}
      {status !== QuizStatus.Finished && <Quiz />}
    </main>
  );
}
