'use client';
import { Button } from '@/components/Button';
import styles from './index.module.scss';
import commonStyles from '@/common.module.scss';
import cn from 'classnames';
import { bodyFont, headingFont } from '@/assets/fonts';
import useWindowDimensions from '@/hooks/useWindowSize';
import { TABLET_WIDTH } from '@/constants/data';
import { Fade } from 'react-awesome-reveal';
import { FadeConfig } from '@/components/FadeConfig';
import { useRouter } from 'next/navigation';
import { Routes } from '@/constants/urls';
import { GWord } from '@/shared/Animations/GWord';

const MOCK = [
  { text: 'Чек-лист для подготовки к визиту' },
  { text: 'Гайды: до и после посещения' },
  { text: 'Служба заботы' },
];

const Benefits = () => {
  return (
    <ul
      className={cn(
        styles.heroList,
        commonStyles.bodyFirstRegularFontSize,
        headingFont.className
      )}
    >
      {MOCK.map((item, id) => (
        <li className={styles.heroListItem} key={id}>
          {item.text}
        </li>
      ))}
    </ul>
  );
};

const HeroDesc = ({
  width,
  isDesktop,
}: {
  width: number | undefined;
  isDesktop: boolean;
}) => {
  const navigate = useRouter();
  return (
    <div className={styles.heroDesc}>
      <h1
        className={cn(
          styles.heroTitle,
          commonStyles.headerFirstFontSize,
          headingFont.className
        )}
      >
        Клиника <br className={styles.heroTitleDesktopBr} /> эстетической
        медицины
      </h1>
      <p
        className={cn(
          styles.heroText,
          commonStyles.bodyFirstRegularFontSize,
          bodyFont.className
        )}
      >
        Объединили опыт и&nbsp;любовь топовых врачей и&nbsp;специалистов,
        премиальное оборудование, внимательный сервис и&nbsp;уникальный формат
        boutique-клиники&nbsp;&mdash; для сохранения вашей красоты
        и&nbsp;молодости
      </p>
      {width && width <= TABLET_WIDTH && <Benefits />}
      <Button
        className={styles.heroButton}
        text='К услугам'
        onClick={() => navigate.push(Routes.SERVICES)}
        type={isDesktop ? 'secondary-light' : 'primary'}
      />
    </div>
  );
};

const Hero = () => {
  const { width } = useWindowDimensions();
  const isDesktop: boolean = width ? width > TABLET_WIDTH : true;
  const sizeGWord = {
    width: 168,
    heigth: 168,
  };

  return (
    <section className={styles.heroWrapper}>
      <div id='activateHeader' className={styles.heroImage} />
      <div className={styles.heroContent}>
        <GWord sizes={sizeGWord} className={styles.gWord} />
        {isDesktop ? (
          <HeroDesc width={width} isDesktop={isDesktop} />
        ) : (
          <FadeConfig>
            <HeroDesc width={width} isDesktop={isDesktop} />
          </FadeConfig>
        )}
        {width && width > TABLET_WIDTH && <Benefits />}
      </div>
    </section>
  );
};

export { Hero };
