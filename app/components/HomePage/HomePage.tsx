'use client';

import React, { useState } from 'react';
import { ChoosePlan } from './components/ChoosePlan/ChoosePlan';
import { Benefits } from './components/Benefits/Benefits';
import { Stats } from './components/Stats/Stats';

export const HomePage = () => {
  const [selectedPlan, setSelectedPlan] = useState<null | number>(null);

  const handlePlanChange = (planId: number) => {
    setSelectedPlan(planId);
  };

  return (
    <>
      <ChoosePlan
        selectedPlan={selectedPlan}
        handlePlanChange={handlePlanChange}
      />

      <Benefits />

      <Stats />
      {/* <ChoosePlan
        selectedPlan={selectedPlan}
        handlePlanChange={handlePlanChange}
      /> */}
    </>
  );
};
