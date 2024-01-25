'use client';

import React, { useState } from 'react';
import { CraftingSlide } from './components/CraftingSlide/CraftingSlide';
import { EmailSlide } from './components/EmailSlide/EmailSlide';
import { ProgressSlide } from './components/ProgressSlide/ProgressSlide';
import { useAppSelector } from '@/app/hooks/useTypedSelector';
import { QuizStatus } from '@/app/types/TQuiz';

export const Quiz = () => {
  const [email, setEmail] = useState<string | null>(null);
  const { status } = useAppSelector((state) => state.quiz);

  const handleEmailChange = (email: string) => {
    setEmail(email);
  };

  return (
    <>
      {status === QuizStatus.Start && <CraftingSlide />}
      {status === QuizStatus.Email && (
        <EmailSlide handleEmailChange={handleEmailChange} email={email}/>
      )}
      {status === QuizStatus.Diagram && <ProgressSlide />}
    </>
  );
};
