'use client';
import { useEffect } from 'react';
import { List } from './components/List';
import { Works } from './components/Works';
import { FadeConfig } from '@/components/FadeConfig';

const SpecialistsPage = () => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <List />
      <FadeConfig>
        <Works />
      </FadeConfig>
    </div>
  );
};

export default SpecialistsPage;
