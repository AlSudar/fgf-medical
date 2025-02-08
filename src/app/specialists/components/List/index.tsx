'use client';
import { SectionTitle } from '@/shared/SectionTitle';
import styles from './index.module.scss';
import { MOCK_SPECIALISTS } from './data';
import { ListSpecialists } from '@/components/ListSpecialists';
import { AdvancedSpecialistI } from '@/constants/types';
import useWindowDimensions from '@/hooks/useWindowSize';
import { MOBILE_WIDTH, TABLET_WIDTH } from '@/constants/data';
import { FWord } from '@/shared/Animations/FWord';
import { GWord } from '@/shared/Animations/GWord';
import { getSpecialistOnMainPage } from '@/api/specialistOnMainPage';
import { useState, useEffect } from 'react';

const List = () => {
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

  const gWordSizes = width && {
    width: width < MOBILE_WIDTH ? 164 : width > TABLET_WIDTH ? 51 : 380,
    heigth: width < MOBILE_WIDTH ? 164 : width > TABLET_WIDTH ? 51 : 380,
  };

  return (
    <div className={styles.sectionWrapper}>
      <section className={styles.section} id='active-specialist'>
        {width && width > TABLET_WIDTH && (
          <FWord className={styles.fWord} sizes={{ width: 18, heigth: 47 }} />
        )}
        {gWordSizes && <GWord sizes={gWordSizes} className={styles.gWord} />}
        <SectionTitle text='Специалисты' />
        {specialistData && (
          <ListSpecialists withQuote size='big' specialists={specialistData} />
        )}
      </section>
    </div>
  );
};

export { List };
