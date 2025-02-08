'use client';
import { SectionTitle } from '@/shared/SectionTitle';
import styles from './index.module.scss';
import commonStyles from '@/common.module.scss';
import Link from 'next/link';
import { Button } from '@/components/Button';
import useWindowDimensions from '@/hooks/useWindowSize';
import { API_URL, TABLET_WIDTH } from '@/constants/data';
import cn from 'classnames';
import { bodyFont } from '@/assets/fonts';
import Image from 'next/image';
import { FadeConfig } from '@/components/FadeConfig';
import { Routes } from '@/constants/urls';
import { LinkToAllItems } from '@/shared/LinkToAllItems';
import { GWord } from '@/shared/Animations/GWord';
import { FWord } from '@/shared/Animations/FWord';
import { useEffect, useState } from 'react';
import { getListCategories } from '@/api/listCategories';
import { CategoryServicesI } from '@/api/listCategories/type';

const MAX_SERVICES_LENGTH = 9;
const MAX_SERVICES_FIRST_LINES_LENGTH = 6;

const Service = ({
  width,
  item,
}: {
  width: number;
  item: CategoryServicesI;
}) => {
  const currentImageSrc =
    width && width <= TABLET_WIDTH ? item.imageTabletSrc : item.imageSrc;

  return (
    <li className={styles.listServicesItem}>
      <Link
        href={`${Routes.SERVICES}#${item.categoryLink}`}
        className={styles.listServicesItemLink}
      >
        <Image
          src={currentImageSrc}
          className={styles.image}
          alt=''
          width={100}
          height={100}
        />
        <p
          className={cn(
            styles.listServicesItemTitle,
            commonStyles.headerThirdAdaptiveFontSize,
            bodyFont.className
          )}
          dangerouslySetInnerHTML={{ __html: item.title }}
        />
        <Button
          text={width && width > TABLET_WIDTH ? 'Перейти' : ''}
          type='primary-light'
          className={cn(
            styles.listServicesItemButton,
            commonStyles.bodyThirdFontSize
          )}
          actionElement={
            <Image
              className={styles.buttonElement}
              src='/components/button/arrow-right.svg'
              alt=''
              width={6}
              height={11}
            />
          }
        />
      </Link>
    </li>
  );
};

const Services = () => {
  const [servicesData, setServicesData] = useState<CategoryServicesI[]>();
  const [lastLineServicesData, setLastLineServicesData] =
    useState<CategoryServicesI[]>();
  const { width } = useWindowDimensions();

  const currentSizeGWord = width && {
    width: width > TABLET_WIDTH ? 32 : 232,
    heigth: width > TABLET_WIDTH ? 32 : 232,
  };
  const currentSizeFWord = width && {
    width: width > TABLET_WIDTH ? 18 : 134,
    heigth: width > TABLET_WIDTH ? 48 : 360,
  };

  useEffect(() => {
    (async () => {
      const { data } = await getListCategories();
      if (data) {
        const filteredData = data.filter(
          (item: CategoryServicesI) => item.viewOnMainPage
        );
        setServicesData(filteredData.slice(0, MAX_SERVICES_FIRST_LINES_LENGTH));
        if (data.length > MAX_SERVICES_FIRST_LINES_LENGTH) {
          setLastLineServicesData(
            filteredData.slice(MAX_SERVICES_FIRST_LINES_LENGTH)
          );
        }
      }
    })();
  }, []);

  if (servicesData) {
    return (
      <div className={styles.sectionWrapper}>
        {currentSizeGWord && (
          <GWord className={styles.wordG} sizes={currentSizeGWord} />
        )}
        {currentSizeFWord && (
          <FWord sizes={currentSizeFWord} className={styles.wordF} />
        )}
        <FadeConfig>
          <section className={styles.section}>
            <SectionTitle text='Услуги FGF medical' />
            {width && (
              <ul className={styles.listServices}>
                {servicesData.map((item, id) => (
                  <Service key={id} item={item} width={width} />
                ))}
              </ul>
            )}
            {width &&
              lastLineServicesData &&
              lastLineServicesData.length > 0 && (
                <ul className={styles.secondListServices}>
                  {lastLineServicesData.map((item, id) => (
                    <Service key={id} item={item} width={width} />
                  ))}
                </ul>
              )}
            <LinkToAllItems
              text='Перейти ко всем услугам'
              href={Routes.SERVICES}
            />
          </section>
        </FadeConfig>
      </div>
    );
  }
};

export { Services };
