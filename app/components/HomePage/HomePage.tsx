'use client';

import React, { useState } from 'react';
import { ChoosePlan } from './components/ChoosePlan/ChoosePlan';

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
      <ChoosePlan
        selectedPlan={selectedPlan}
        handlePlanChange={handlePlanChange}
      />
    </>
  );
};
