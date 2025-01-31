'use client';
import { useToggleBackgroundHeader } from '@/hooks/useToggleBackgroundHeader';
import { useEffect } from 'react';
import { AllCategories } from './components/AllCategories';
import { ListCategories } from './components/ListCategories';

const ComponentsPage = () => {
  const { handlerTogglerHeaderBackground } = useToggleBackgroundHeader();

  useEffect(() => {
    if (document && document.getElementById('activateHeader')) {
      const onHandlerTogglerHeaderBackground = () => {
        handlerTogglerHeaderBackground(
          document.getElementById('activateHeader')
        );
      };
      onHandlerTogglerHeaderBackground();
      document.addEventListener('scroll', onHandlerTogglerHeaderBackground);

      return () =>
        document.removeEventListener(
          'scroll',
          onHandlerTogglerHeaderBackground
        );
    }
  }, [handlerTogglerHeaderBackground]);

  return (
    <>
      <ListCategories />
      <AllCategories />
    </>
  );
};

export default ComponentsPage;
