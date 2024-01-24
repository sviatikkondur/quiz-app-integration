import styles from './page.module.scss';
import { HomePage } from './components/HomePage/HomePage';
import { ProgressBar } from './components/ProgressBar/ProgressBar';
import { Quiz } from './components/Quiz/Quiz';
import { QuizStatus } from './types/TQuiz';

export default function Home() {
  const quizStatus: QuizStatus = QuizStatus.Finished;

  return (
    <main className={styles.main}>
      {quizStatus === QuizStatus.Finished && <HomePage />}
      {quizStatus !== QuizStatus.Finished && <Quiz />}
    </main>
  );
}
