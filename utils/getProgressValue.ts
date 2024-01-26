import { QuizStatus } from '@/types/TQuiz';

export const getProgressValue = (status: QuizStatus) => {
  return status === QuizStatus.Finished ? 100 : Math.floor((status / 3) * 100);
};
