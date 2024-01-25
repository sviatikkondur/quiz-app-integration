import React, { FormEvent } from 'react';
import styles from './plan.module.scss';
import { Plans } from './Plans/Plans';
import { plans } from '@/app/utils/data/plans';

type Props = {
  selectedPlan: number | null;
  handlePlanChange: (id: number) => void;
};

export const ChoosePlan: React.FC<Props> = ({
  selectedPlan,
  handlePlanChange,
}) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section>
      <form
        className={styles.form}
        onSubmit={(e) => handleSubmit(e)}
      >
        <h2 className={styles.subtitle}>Choose your plan</h2>

        <Plans
          plans={plans}
          handlePlanChange={handlePlanChange}
          selectedPlan={selectedPlan}
        />

        <button
          className={styles.cta}
          type='submit'
        >
          Get my plan
        </button>

        <p className={styles.planDetails}>
          You are enrolling in a 3-monthly subscription to
          <a
            href='https://awesomeapp.com/subscription'
            className={styles.subscription}
          >
            {' '}
            https://awesomeapp.com/subscription{' '}
          </a>
          with the discount price $29.99.You agree that the plan you selected
          will automatically be extended at the full price for successive
          renewal periods and you will be charged $99.99 every 3 months until
          you cancel the subscription. Payments will be charged from the card
          you specified here. You can cancel your subscription by contacting our
          customer support team via email at support@awesomeapp.com Subscription
          Policy. The charge will appear on your bill as
          &rdquo;awesomeapp&rdquo;
        </p>
      </form>
    </section>
  );
};
