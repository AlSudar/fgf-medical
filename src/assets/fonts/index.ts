import localFont from 'next/font/local';

const headingFont = localFont({
  src: [
    {
      path: '../../../public/fonts/involve/medium.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/involve/medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/involve/bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/involve/semiBold.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
});

const bodyFont = localFont({
  src: [
    {
      path: '../../../public/fonts/proximaNova/regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/proximaNova/medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/proximaNova/bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/proximaNova/semiBold.otf',
      weight: '800',
      style: 'normal',
    },
  ],
});

export { headingFont, bodyFont };
