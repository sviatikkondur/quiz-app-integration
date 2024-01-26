import { Loader } from '@/components/Loader/Loader';
import React from 'react';

const Loading = () => {
  return (
    <section style={{ height: '100%', display: 'flex' }}>
      <Loader />
    </section>
  );
};

export default Loading;
