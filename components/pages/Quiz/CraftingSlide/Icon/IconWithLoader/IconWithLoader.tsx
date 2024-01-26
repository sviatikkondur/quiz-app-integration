'use client';

import React, { useEffect, useState } from 'react';
import './icon.scss';
import Image from 'next/image';
import { IconType } from '@/types/Step';

type Props = {
  icon: IconType;
};

export const IconWithLoader: React.FC<Props> = ({ icon }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <>
      {isLoading && (
        <div
          id='loading-bar-spinner'
          className='spinner'
        >
          <div className='spinner-icon'></div>
        </div>
      )}

      {!isLoading && (
        <Image
          className='icon'
          src={icon}
          alt='icon'
        />
      )}
    </>
  );
};
