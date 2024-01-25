import React from 'react';
import { IconWithLoader } from './IconWithLoader/IconWithLoader';

type Props = {
  icon: any;
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
