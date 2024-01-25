'use client';

import { useRouter } from 'next/navigation';
import { Quiz } from '../../components/Quiz/Quiz';
import styles from './page.module.scss';
import { QuizStatus } from '../../types/TQuiz';
import { useEffect } from 'react';
import { useAppSelector } from '@/app/hooks/useTypedSelector';

export default function QuizPage() {
  const { status } = useAppSelector((state) => state.quiz);
  const router = useRouter();

  useEffect(() => {
    if (status === QuizStatus.Finished) {
      router.push('/');
    }
  }, [status, router]);

  return (
    <main className={styles.main}>
      {status !== QuizStatus.Finished && <Quiz />}
    </main>
  );
}
