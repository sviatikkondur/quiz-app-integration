'use client';

import React, { useMemo, useState } from 'react';
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

  const getUserVariant = () => {
    const variants = ['A', 'B'];
    return variants[Math.floor(Math.random() * variants.length)];
  };

  const variant = useMemo(() => {
    return getUserVariant();
  }, []);

  return (
    <section className={styles.section}>
      <ChoosePlan
        selectedPlan={selectedPlan}
        handlePlanChange={handlePlanChange}
        variant={variant}
      />

      <Benefits />

      <Stats />

      <Reviews />

      <ChoosePlan
        selectedPlan={selectedPlan}
        handlePlanChange={handlePlanChange}
        variant={variant}
      />
    </section>
  );
};
