import React from 'react';
import './stars.scss';

type Props = {
  rating: number;
};

export const Stars: React.FC<Props> = ({ rating }) => {
  return (
    <div className={`stars--${rating} stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className='stars__star'
        />
      ))}
    </div>
  );
};
