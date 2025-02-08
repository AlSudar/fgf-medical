/* eslint-disable @next/next/no-img-element */
import { Metadata } from 'next';
import '@/reset.css';
import { DEFAULT_SEO } from './page';
import React from 'react';
import '@/variables.module.scss';
import 'swiper/css';

export const metadata: Metadata = { ...DEFAULT_SEO };

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='ru'>
      <body>
        {children}
        {/* <Script id='metrika-counter' strategy='afterInteractive'>
          {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(99309525, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
   })`}
        </Script>
        <Suspense fallback={<></>}>
          <YandexMetrika />
        </Suspense> */}
      </body>
    </html>
  );
};

export default Layout;
