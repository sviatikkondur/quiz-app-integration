'use client';

import React, { useState } from 'react';
import { ChoosePlan } from './components/ChoosePlan/ChoosePlan';
import { Benefits } from './components/Benefits/Benefits';
import { Stats } from './components/Stats/Stats';
import { Reviews } from './components/Reviews/Reviews';
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
