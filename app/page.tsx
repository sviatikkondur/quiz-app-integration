'use client';

import { useEffect } from 'react';
import styles from './page.module.scss';
import { HomePage } from './components/HomePage/HomePage';
import { QuizStatus } from './types/TQuiz';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const quizStatus: QuizStatus | null = QuizStatus.Start;

  useEffect(() => {
    if (quizStatus !== null) {
      router.push('/quiz');
    }
  }, [quizStatus, router]);

  return (
    <main className={styles.main}>{quizStatus === null && <HomePage />}</main>
  );
}
