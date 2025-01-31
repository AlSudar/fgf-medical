'use client';
import { useToggleBackgroundHeader } from '@/hooks/useToggleBackgroundHeader';
import { useEffect } from 'react';
import { About } from './components/About';
import { Banner } from './components/Banner';
import { Benefits } from './components/Benefits';
import { Hero } from './components/Hero';
import { FadeConfig } from '@/components/FadeConfig';
import { Products } from './components/Products';

const AboutPage = () => {
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
    <div style={{ overflow: 'hidden' }}>
      <Hero />
      <FadeConfig>
        <Benefits />
      </FadeConfig>
      <About />
      <Products />
      <Banner />
    </div>
  );
};

export default AboutPage;
