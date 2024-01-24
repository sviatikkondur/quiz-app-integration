'use client';

import React, { useState } from 'react';
import { ChoosePlan } from './components/ChoosePlan/ChoosePlan';
import { Benefits } from './components/WhatYouGet/Benefits';

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
      
      {/* <ChoosePlan
        selectedPlan={selectedPlan}
        handlePlanChange={handlePlanChange}
      /> */}
    </>
  );
};
