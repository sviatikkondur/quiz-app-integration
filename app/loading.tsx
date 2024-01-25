import React from 'react';
import { Loader } from './components/Loader/Loader';

const Loading = () => {
  return (
    <section style={{ height: '100%', display: 'flex' }}>
      <Loader />
    </section>
  );
};

export default Loading;
