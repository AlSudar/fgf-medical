'use client';
import styles from './index.module.scss';
import { SectionTitle } from '@/shared/SectionTitle';
import useWindowDimensions from '@/hooks/useWindowSize';
import { TABLET_WIDTH } from '@/constants/data';
import { AnimatedWidthListSpecialists } from '../../../../components/AnimatedWidthListSpecialists';
import { ListSpecialists } from '@/components/ListSpecialists';
import { FadeConfig } from '@/components/FadeConfig';
import { Routes } from '@/constants/urls';
import { LinkToAllItems } from '@/shared/LinkToAllItems';
import { AdvancedSpecialistI, SpecialistI } from '@/constants/types';
import { WordI } from '@/shared/Animations/type';
import { FWord } from '@/shared/Animations/FWord';
import { GWord } from '@/shared/Animations/GWord';
import { FWordReversed } from '@/shared/Animations/FWordReversed';
import { useEffect, useState } from 'react';
import { getSpecialistOnMainPage } from '@/api/specialistOnMainPage';

const MAX_LENGHT_SPECIALISTS = 3;

const Team = () => {
  const { width } = useWindowDimensions();
  const [specialistData, setSpecialistsData] =
    useState<AdvancedSpecialistI[]>();

  useEffect(() => {
    (async () => {
      const data = await getSpecialistOnMainPage();
      if (data.data) {
        setSpecialistsData(
          data.data[0].specialists.map((item: any, id: number) => ({
            ...item,
            positionOnList: (id += 1),
          }))
        );
      }
    })();
  }, []);

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

  if (specialistData) {
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
              <AnimatedWidthListSpecialists
                specialists={specialistData.slice(0, MAX_LENGHT_SPECIALISTS)}
              />
            ) : (
              <ListSpecialists
                withAllSpecialist
                type='primary'
                specialists={specialistData.slice(0, MAX_LENGHT_SPECIALISTS)}
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
  }
};

export { Team };
