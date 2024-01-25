'use client';

import { useEffect } from 'react';
import styles from './page.module.scss';
import { QuizStatus } from './types/TQuiz';
import { useRouter } from 'next/navigation';
import { useAppSelector } from './hooks/useTypedSelector';
import { Quiz } from './components/Quiz/Quiz';

export default function Home() {
  const { status } = useAppSelector((state) => state.quiz);
  const router = useRouter();

  useEffect(() => {
    if (status === QuizStatus.Finished) {
      router.push('/home');
    }
  }, [status, router]);

  return (
    <main className={styles.main}>
      {status !== QuizStatus.Finished && <Quiz />}
    </main>
  );
}
