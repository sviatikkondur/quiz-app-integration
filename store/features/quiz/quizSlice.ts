'use client';

import { QuizStatus } from '@/types/TQuiz';
import { createSlice } from '@reduxjs/toolkit';

export interface QuizSlice {
  status: QuizStatus;
}

const initialState: QuizSlice = {
  status: QuizStatus.Start,
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    changeStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { changeStatus } = quizSlice.actions;

export default quizSlice.reducer;
