'use client';

import { useRouter } from 'next/navigation';
import { Quiz } from '../components/Quiz/Quiz';
import styles from './page.module.scss';
import { QuizStatus } from '../types/TQuiz';
import { useEffect } from 'react';

export default function QuizPage() {
  const router = useRouter();
  const quizStatus: QuizStatus | null = QuizStatus.Start;

  useEffect(() => {
    if (quizStatus === null) {
      router.push('/');
    }
  }, [quizStatus, router]);

  return <main className={styles.main}>{quizStatus !== null && <Quiz />}</main>;
}
