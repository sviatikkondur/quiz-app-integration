'use client';

import React, { useState } from 'react';
import styles from './plan.module.scss';
import { Plans } from '../Plans/Plans';

const plans = [
  { id: 1, duration: 1, price: 10 },
  { id: 2, duration: 3, price: 30 },
  { id: 3, duration: 6, price: 60 },
];

export const ChoosePlan = () => {
  const [selectedPlan, setSelectedPlan] = useState<null | number>(null);

  const handlePlanChange = (planId: number) => {
    setSelectedPlan(planId);
  };

  return (
    <section>
      <h2 className={styles.subtitle}>Choose your plan</h2>

      <Plans
        plans={plans}
        handlePlanChange={handlePlanChange}
        selectedPlan={selectedPlan}
      />
    </section>
  );
};
