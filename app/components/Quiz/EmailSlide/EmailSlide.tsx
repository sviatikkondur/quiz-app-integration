'use client';

import React from 'react';
import styles from './email.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames';
import { useAppDispatch } from '@/app/hooks/useTypedSelector';
import { changeStatus } from '@/app/GlobalRedux/features/quiz/quizSlice';
import { QuizStatus } from '@/app/types/TQuiz';

type Props = {
  handleEmailChange: (email: string) => void;
};

export const EmailSlide: React.FC<Props> = ({ handleEmailChange }) => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: () => {
      dispatch(changeStatus(QuizStatus.Diagram));
    },
  });

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>
        Enter your email to get your personalised Spiritual Growth Plan
      </h1>

      <form
        className={styles.form}
        onSubmit={(event) => {
          formik.handleSubmit(event);
          event.preventDefault();
        }}
      >
        <label
          className={classNames(styles.label, {
            [styles.errorLabel]: formik.errors.email && formik.touched.email,
          })}
        >
          <span className={styles.labelName}>Email</span>
          <input
            type='email'
            id='email'
            name='email'
            onChange={(e) => {
              formik.handleChange(e);
              handleEmailChange(e.target.value);
            }}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={styles.input}
          />

          {formik.touched.email && formik.errors.email ? (
            <div className={styles.error}>{formik.errors.email}</div>
          ) : null}
        </label>

        <button
          type='submit'
          className={styles.CTA}
        >
          Continue
        </button>
      </form>
    </section>
  );
};
