'use client';

import { useEffect } from 'react';
import styles from './page.module.scss';
import { HomePage } from './components/HomePage/HomePage';
import { QuizStatus } from './types/TQuiz';
import { useRouter } from 'next/navigation';
import { useAppSelector } from './hooks/useTypedSelector';

export default function Home() {
  const { status } = useAppSelector((state) => state.quiz);
  const router = useRouter();

  useEffect(() => {
    if (status === QuizStatus.Start) {
      router.push('/quiz');
    }
  }, [status, router]);

  return (
    <main className={styles.main}>
      {status === QuizStatus.Finished && <HomePage />}
    </main>
  );
}
