'use client';
import { SectionTitle } from '@/shared/SectionTitle';
import styles from './index.module.scss';
import commonStyles from '@/common.module.scss';
import { MOCK_SERVICES } from './data';
import Link from 'next/link';
import { Button } from '@/components/Button';
import useWindowDimensions from '@/hooks/useWindowSize';
import { TABLET_WIDTH } from '@/constants/data';
import cn from 'classnames';
import { bodyFont } from '@/assets/fonts';
import Image from 'next/image';
import { FadeConfig } from '@/components/FadeConfig';
import { Routes } from '@/constants/urls';
import { LinkToAllItems } from '@/shared/LinkToAllItems';
import { GWord } from '@/shared/Animations/GWord';
import { FWord } from '@/shared/Animations/FWord';

const MAX_SERVICES_LENGTH = 9;
const MAX_SERVICES_FIRST_LINES_LENGTH = 6;

const Services = () => {
  const { width } = useWindowDimensions();
  let currentServices = MOCK_SERVICES.slice(0, MAX_SERVICES_LENGTH);
  const currentSizeGWord = width && {
    width: width > TABLET_WIDTH ? 32 : 232,
    heigth: width > TABLET_WIDTH ? 32 : 232,
  };
  const currentSizeFWord = width && {
    width: width > TABLET_WIDTH ? 18 : 134,
    heigth: width > TABLET_WIDTH ? 48 : 360,
  };
  let lastLineServices;

  if (currentServices.length > MAX_SERVICES_FIRST_LINES_LENGTH) {
    lastLineServices = MOCK_SERVICES.slice(MAX_SERVICES_FIRST_LINES_LENGTH);
    currentServices = currentServices.slice(0, MAX_SERVICES_FIRST_LINES_LENGTH);
  }

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
              {currentServices.map((item, id) => {
                const currentImageSrc =
                  width && width <= TABLET_WIDTH
                    ? item.tabletImage
                    : item.image;
                return (
                  <li className={styles.listServicesItem} key={id}>
                    <Image
                      src={currentImageSrc}
                      className={styles.image}
                      alt=''
                      width={100}
                      height={100}
                    />
                    <Link
                      href={item.link}
                      className={styles.listServicesItemLink}
                    >
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
              })}
            </ul>
          )}
          {width && lastLineServices && lastLineServices.length > 0 && (
            <ul className={styles.secondListServices}>
              {lastLineServices.map((item, id) => {
                const currentImageSrc =
                  width && width <= TABLET_WIDTH
                    ? item.tabletImage
                    : item.image;

                return (
                  <li className={styles.listServicesItem} key={id}>
                    <Image
                      src={currentImageSrc}
                      className={styles.image}
                      alt=''
                      width={100}
                      height={100}
                    />
                    <Link
                      href={item.link}
                      className={styles.listServicesItemLink}
                    >
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
              })}
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
};

export { Services };
