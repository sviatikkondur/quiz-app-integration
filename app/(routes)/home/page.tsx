'use client';

import { useRouter } from 'next/navigation';
import styles from './page.module.scss';
import { QuizStatus } from '../../types/TQuiz';
import { useEffect } from 'react';
import { useAppSelector } from '@/app/hooks/useTypedSelector';
import { HomePage } from '@/app/components/HomePage/HomePage';

export default function Home() {
  const { status } = useAppSelector((state) => state.quiz);
  const router = useRouter();

  useEffect(() => {
    if (status !== QuizStatus.Finished) {
      router.push('/');
    }
  }, [status, router]);

  return (
    <main className={styles.main}>
      {status === QuizStatus.Finished && <HomePage />}
    </main>
  );
}
