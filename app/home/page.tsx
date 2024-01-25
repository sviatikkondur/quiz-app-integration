'use client';

import { useRouter } from 'next/navigation';
import styles from './page.module.scss';
import { useEffect } from 'react';
import { HomePage } from '@/app/components/HomePage/HomePage';
import { useAppSelector } from '@/hooks/useTypedSelector';
import { QuizStatus } from '@/types/TQuiz';

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
