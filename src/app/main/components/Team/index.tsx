'use client';
import styles from './index.module.scss';
import { SectionTitle } from '@/shared/SectionTitle';
import { MOCK } from './data';
import Image from 'next/image';
import cn from 'classnames';
import { headingFont } from '@/assets/fonts';
import Link from 'next/link';
import useWindowDimensions from '@/hooks/useWindowSize';
import { MOBILE_WIDTH, TABLET_WIDTH } from '@/constants/data';
import { AnimatedWidthListSpecialists } from '../../../../components/AnimatedWidthListSpecialists';
import { ListSpecialists } from '@/components/ListSpecialists';
import { FadeConfig } from '@/components/FadeConfig';
import { Routes } from '@/constants/urls';
import { LinkToAllItems } from '@/shared/LinkToAllItems';
import { AdvancedSpecialistI } from '@/constants/types';
import { WordI } from '@/shared/Animations/type';
import { FWord } from '@/shared/Animations/FWord';
import { GWord } from '@/shared/Animations/GWord';
import { FWordReversed } from '@/shared/Animations/FWordReversed';

const MobileContent = () => {
  return (
    <div className={styles.contentTabletWrapper}>
      <ul className={styles.contentTablet}>
        {MOCK.map((item, id) => {
          return (
            <li className={styles.contentTabletItem} key={id}>
              <Image
                className={styles.contentTabletItemImage}
                src={item.img}
                alt={`${item.name} ${item.lastName}`}
                width={186}
                height={120}
              />
              <p>
                {item.name} {item.lastName}
              </p>
              <p>{item.speciality}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Team = () => {
  const { width } = useWindowDimensions();

  const advancedSpecialist: AdvancedSpecialistI[] = [];
  MOCK.forEach((item, id) => {
    advancedSpecialist.push({ ...item, positionOnList: (id += 1) });
  });
  const fWordSize: WordI['sizes'] = {
    width: 136,
    heigth: 360,
  };
  const fWordReversedSize: WordI['sizes'] = {
    width: 20,
    heigth: 50,
  };
  const currentSizeGWord = width && {
    width: 52,
    heigth: 52,
  };

  return (
    <FadeConfig>
      <div className={styles.wrapperSection}>
        {width && width > TABLET_WIDTH && fWordReversedSize && (
          <FWordReversed
            className={styles.fWordReversed}
            sizes={fWordReversedSize}
          />
        )}
        {width && width > TABLET_WIDTH && currentSizeGWord && (
          <GWord className={styles.gWord} sizes={currentSizeGWord} />
        )}
        {width && width < TABLET_WIDTH && (
          <FWord className={styles.fWord} sizes={fWordSize} />
        )}
        <section className={styles.section}>
          <SectionTitle
            className={styles.title}
            text='Команда профессионалов'
          />
          {width && width > TABLET_WIDTH ? (
            <AnimatedWidthListSpecialists specialists={MOCK} />
          ) : (
            <ListSpecialists
              withAllSpecialist
              type='primary'
              specialists={advancedSpecialist}
            />
          )}
          {width && width > TABLET_WIDTH && (
            <LinkToAllItems
              href={Routes.SPECIALISTS}
              text='Смотреть всех специалистов'
            />
          )}
        </section>
      </div>
    </FadeConfig>
  );
};

export { Team };
