'use client';

import React, { useState } from 'react';
import { useAppSelector } from '@/app/hooks/useTypedSelector';
import { QuizStatus } from '@/app/types/TQuiz';
import { CraftingSlide } from './CraftingSlide/CraftingSlide';
import { EmailSlide } from './EmailSlide/EmailSlide';
import { ProgressSlide } from './ProgressSlide/ProgressSlide';

export const Quiz = () => {
  const [email, setEmail] = useState<string>('');
  const { status } = useAppSelector((state) => state.quiz);

  const handleEmailChange = (email: string) => {
    setEmail(email);
  };

  return (
    <>
      {status === QuizStatus.Start && <CraftingSlide />}
      {status === QuizStatus.Email && (
        <EmailSlide handleEmailChange={handleEmailChange} />
      )}
      {status === QuizStatus.Diagram && <ProgressSlide email={email} />}
    </>
  );
};
