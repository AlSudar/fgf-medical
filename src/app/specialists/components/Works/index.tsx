'use client';
import { SectionTitle } from '@/shared/SectionTitle';
import styles from './index.module.scss';
import commonStyles from '@/common.module.scss';
import cn from 'classnames';
import { MOCK_WORKS } from './data';
import Image from 'next/image';
import { headingFont } from '@/assets/fonts';
import useWindowDimensions from '@/hooks/useWindowSize';
import { FWordReversed } from '@/shared/Animations/FWordReversed';

const Works = () => {
  const { width } = useWindowDimensions();
  return (
    <div className={styles.sectionWrapper}>
      <FWordReversed
        sizes={{ width: 21, heigth: 56 }}
        className={styles.fWordReversed}
      />
      <section className={styles.section}>
        <SectionTitle text='Работы наших специалистов' />
        <ul className={styles.list}>
          {MOCK_WORKS.map((work, id) => {
            return (
              <li className={styles.listItem} key={id}>
                <Image
                  className={styles.listItemImage}
                  src={work.image}
                  alt={work.result}
                  width={440}
                  height={250}
                />
                <p
                  className={cn(
                    styles.listItemProcedure,
                    commonStyles.headerThirdFontSize,
                    headingFont.className
                  )}
                >
                  {work.procedure}
                </p>
                <p
                  className={cn(
                    styles.listItemResult,
                    commonStyles.bodySecondFontSize,
                    headingFont.className
                  )}
                >
                  {work.result}
                </p>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export { Works };
