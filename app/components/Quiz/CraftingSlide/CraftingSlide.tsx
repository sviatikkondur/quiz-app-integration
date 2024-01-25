'use client';

import React, { useEffect, useState } from 'react';
import styles from './crafting.module.scss';
import { Icon } from './Icon/Icon';
import { steps } from '@/utils/data/steps';
import { useAppDispatch } from '@/hooks/useTypedSelector';
import { changeStatus } from '@/store/features/quiz/quizSlice';
import { QuizStatus } from '@/types/TQuiz';

export const CraftingSlide = () => {
  const [iconsStatus, setIconsStatus] = useState<{
    [key: number]: { id: number; isShowing: boolean };
  }>({
    0: { id: 0, isShowing: true },
    1: { id: 1, isShowing: false },
    2: { id: 2, isShowing: false },
    3: { id: 3, isShowing: false },
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    // used timeouts to imitate async actions (requests)
    setTimeout(() => {
      setIconsStatus((prev) => ({
        ...prev,
        1: { ...prev[1], isShowing: true },
      }));
    }, 200);

    setTimeout(() => {
      setIconsStatus((prev) => ({
        ...prev,
        2: { ...prev[2], isShowing: true },
      }));
    }, 400);

    setTimeout(() => {
      setIconsStatus((prev) => ({
        ...prev,
        3: { ...prev[3], isShowing: true },
      }));
    }, 600);

    setTimeout(() => {
      dispatch(changeStatus(QuizStatus.Email));
    }, 2500);
  }, [dispatch]);

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>
        We are crafting your spiritual growth plan
      </h1>

      <div className={styles.progress}>
        <p className={styles.progressPercentage}>87%</p>
      </div>

      <ul className={styles.list}>
        {steps.map((step) => (
          <li
            key={step.id}
            className={styles.listItem}
          >
            <Icon
              icon={step.icon}
              isIconShown={iconsStatus[step.id].isShowing}
            />
            <p className={styles.listItemText}>{step.message}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
