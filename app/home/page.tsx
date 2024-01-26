'use client';

import { useRouter } from 'next/navigation';
import styles from './page.module.scss';
import { useEffect } from 'react';
import { useAppSelector } from '@/hooks/useTypedSelector';
import { QuizStatus } from '@/types/TQuiz';
import { HomePage } from '@/components/pages/Home/Home';

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
