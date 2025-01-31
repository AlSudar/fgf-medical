'use client';
import { Metadata } from 'next';
import { Hero } from './main/components/Hero';
import { Services } from './main/components/Services';
import { About } from './main/components/About';
import { Team } from './main/components/Team';
import { Consultation } from './main/components/Consultation';
import { useEffect, useRef } from 'react';
import { useToggleBackgroundHeader } from '@/hooks/useToggleBackgroundHeader';
// import { MAIL, PHONE_NUMBER } from '@/data/contacts';

export const DEFAULT_SEO: Metadata = {
  title: '',
  description: '',
  icons: [
    {
      url: '/favicon.ico',
      type: 'Image/x-icon',
      rel: 'icon',
      sizes: '16x16',
    },
    {
      url: '/favicon.svg',
      sizes: '16x16',
    },
    {
      url: '/favicon32.svg',
      sizes: '32x32',
    },
  ],
  openGraph: {
    title:
      'Эксклюзивный импорт южнокорейского рынка wellness & beauty для эстетической медицины.',
    description:
      'Премиальные инъекционные препараты, космецевтика и нутрицевтика. Оптовые продажи и маркетинговая поддержка дистрибьюции. Организация и информационное сопровождение конференций.',
    // emails: MAIL,
    // phoneNumbers: [PHONE_NUMBER],
    locale: 'ru',
    images: [
      {
        url: '/og-image.jpg',
        width: 556,
        height: 228,
      },
      {
        url: '/og-image-md.jpg',
        width: 1012,
        height: 506,
      },
    ],
  },
};

export default function Home() {
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
      <Hero />
      <Services />
      <About />
      <Team />
      <Consultation />
    </>
  );
}
