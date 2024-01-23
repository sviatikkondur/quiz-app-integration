import classNames from 'classnames';
import React from 'react';
import styles from './plans.module.scss';
import { TPlan } from '@/app/types/TPlan';

type Props = {
  plans: TPlan[];
  handlePlanChange: (id: number) => void;
  selectedPlan: null | number;
};

export const Plans: React.FC<Props> = ({
  plans,
  handlePlanChange,
  selectedPlan,
}) => {
  const popularPlanId = 2;

  return (
    <div className={styles.plans}>
      {plans.map((plan) => {
        return (
          <div
            key={plan.id}
            className={classNames(styles.optionWrapper, {
              [styles.planOptionSelected]: selectedPlan === plan.id,
            })}
          >
            {popularPlanId === plan.id && (
              <div className={styles.popularTag}>Most Popular</div>
            )}
            <div
              className={classNames(styles.planOption, {
                [styles.planOptionPopular]: popularPlanId === plan.id,
              })}
              onClick={() => handlePlanChange(plan.id)}
            >
              <label
                className={styles.optionLabel}
                htmlFor={String(plan.id)}
              >
                <input
                  id={String(plan.id)}
                  type='radio'
                  name='plan'
                  value={`${plan.duration}-Month Plan`}
                  className={styles.optionInput}
                  checked={selectedPlan === plan.id}
                />

                <div
                  className={classNames(styles.icon, {
                    [styles.selectedIcon]: selectedPlan === plan.id,
                  })}
                />
                {`${plan.duration}-Month Plan`}
              </label>

              <div className={styles.priceTag}>
                <p className={styles.dollar}>$</p>
                <p className={styles.price}>{`${plan.price}`}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
