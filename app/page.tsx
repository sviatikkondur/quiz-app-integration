'use client';

import { useEffect } from 'react';
import styles from './page.module.scss';
import { QuizStatus } from '../types/TQuiz';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/hooks/useTypedSelector';
import { getProgressValue } from '@/utils/getProgressValue';
import { ProgressBar } from '@/components/ProgressBar/ProgressBar';
import { Quiz } from '@/components/Quiz/Quiz';

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
