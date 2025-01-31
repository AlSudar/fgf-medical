'use client';
import { Button } from '@/components/Button';
import styles from './index.module.scss';
import commonStyles from '@/common.module.scss';
import cn from 'classnames';
import { bodyFont, headingFont } from '@/assets/fonts';
import Image from 'next/image';
import { FadeConfig } from '@/components/FadeConfig';
import useWindowDimensions from '@/hooks/useWindowSize';
import { MOBILE_WIDTH, TABLET_WIDTH } from '@/constants/data';
import { FWord } from '@/shared/Animations/FWord';
import { FWordReversed } from '@/shared/Animations/FWordReversed';

const About = () => {
  const { width } = useWindowDimensions();
  const isDesktop = width && width > TABLET_WIDTH;
  const fWordSize = {
    width: width && width > MOBILE_WIDTH ? 132 : 80,
    heigth: width && width > MOBILE_WIDTH ? 356 : 214,
  };
  return (
    <section className={styles.section}>
      {isDesktop && (
        <FWordReversed
          className={styles.fWordReversed}
          sizes={{ width: 20, heigth: 54 }}
        />
      )}
      {!isDesktop && <FWord className={styles.fWord} sizes={fWordSize} />}
      <div className={cn(styles.content, bodyFont.className)}>
        <FadeConfig>
          <>
            <h2
              className={cn(
                styles.title,
                headingFont.className,
                commonStyles.headerSecondFontSize
              )}
            >
              Фамилия Имя
            </h2>
            <p className={cn(styles.subtitle, commonStyles.bodySecondFontSize)}>
              Главный врач клиники FGF medical
            </p>
            <p
              className={cn(
                styles.lastSubtitle,
                commonStyles.bodySecondFontSize
              )}
            >
              Опыт работы
            </p>
            <p
              className={cn(styles.desc, commonStyles.bodyFirstRegularFontSize)}
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.{' '}
            </p>
            <p
              className={cn(styles.desc, commonStyles.bodyFirstRegularFontSize)}
            >
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit.
            </p>
            <p
              className={cn(styles.desc, commonStyles.bodyFirstRegularFontSize)}
            >
              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </>
        </FadeConfig>
        {width && width > MOBILE_WIDTH ? (
          <Image
            className={styles.image}
            alt=''
            width={324}
            height={280}
            src='/pages/about/about/image.png'
          />
        ) : (
          <FadeConfig>
            <Image
              className={styles.image}
              alt=''
              width={324}
              height={280}
              src='/pages/about/about/image.png'
            />
          </FadeConfig>
        )}
        <FadeConfig>
          <Button className={styles.button} text='Записаться' type='primary' />
        </FadeConfig>
      </div>
    </section>
  );
};

export { About };
