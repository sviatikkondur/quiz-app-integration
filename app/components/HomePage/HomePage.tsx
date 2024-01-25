'use client';

import React, { useState } from 'react';
import { ChoosePlan } from './ChoosePlan/ChoosePlan';
import { Benefits } from './Benefits/Benefits';
import { Stats } from './Stats/Stats';
import { Reviews } from './Reviews/Reviews';
import styles from './home.module.scss';

export const HomePage = () => {
  const [selectedPlan, setSelectedPlan] = useState<null | number>(null);

  const handlePlanChange = (planId: number) => {
    setSelectedPlan(planId);
  };

  return (
    <section className={styles.section}>
      <ChoosePlan
        selectedPlan={selectedPlan}
        handlePlanChange={handlePlanChange}
      />

      <Benefits />

      <Stats />

      <Reviews />

      <ChoosePlan
        selectedPlan={selectedPlan}
        handlePlanChange={handlePlanChange}
      />
    </section>
  );
};
