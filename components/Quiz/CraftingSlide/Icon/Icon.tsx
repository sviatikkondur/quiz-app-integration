import React from 'react';
import { IconWithLoader } from './IconWithLoader/IconWithLoader';
import { IconType } from '@/types/Step';

type Props = {
  icon: IconType;
  isIconShown: boolean;
};

export const Icon: React.FC<Props> = ({ icon, isIconShown }) => {
  return (
    <>
      {!isIconShown && (
        <div
          style={{
            height: '24px',
            minWidth: '24px',
          }}
        />
      )}
      {isIconShown && <IconWithLoader icon={icon} />}
    </>
  );
};
