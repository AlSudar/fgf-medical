'use client';
import { SectionTitle } from '@/shared/SectionTitle';
import styles from './index.module.scss';
import commonStyles from '@/common.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import { headingFont } from '@/assets/fonts';
import { FWordReversed } from '@/shared/Animations/FWordReversed';
import { useEffect, useState } from 'react';
import { WorkI } from '@/api/specialistsResult/type';
import { getSpecialistsResult } from '@/api/specialistsResult';

const Works = () => {
  const [worksData, setWorksData] = useState<WorkI[]>();

  useEffect(() => {
    (async () => {
      const data = await getSpecialistsResult();

      if (data) {
        setWorksData(data.data[0].data);
      }
    })();
  }, []);

  return (
    <div className={styles.sectionWrapper}>
      <FWordReversed
        sizes={{ width: 21, heigth: 56 }}
        className={styles.fWordReversed}
      />
      <section className={styles.section}>
        <SectionTitle text='Работы наших специалистов' />
        {worksData && (
          <ul className={styles.list}>
            {worksData.map((work, id) => {
              return (
                <li className={styles.listItem} key={id}>
                  <Image
                    className={styles.listItemImage}
                    src={work.imageSrc}
                    alt={work.title ?? ''}
                    width={440}
                    height={250}
                  />
                  {work.title && (
                    <p
                      className={cn(
                        styles.listItemProcedure,
                        commonStyles.headerThirdFontSize,
                        headingFont.className
                      )}
                    >
                      {work.title}
                    </p>
                  )}
                  {work.description && (
                    <p
                      className={cn(
                        styles.listItemResult,
                        commonStyles.bodySecondFontSize,
                        headingFont.className
                      )}
                    >
                      {work.description}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
};

export { Works };
