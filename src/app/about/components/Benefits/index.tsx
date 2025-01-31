'use client';
import cn from 'classnames';
import styles from './index.module.scss';
import commonStyles from '@/common.module.scss';
import { SectionTitle } from '@/shared/SectionTitle';
import { BenefitI, MOCK_BENEFITS } from './data';
import { Button } from '@/components/Button';
import Image from 'next/image';
import { bodyFont, headingFont } from '@/assets/fonts';
import useWindowDimensions from '@/hooks/useWindowSize';
import { MOBILE_WIDTH, TABLET_WIDTH } from '@/constants/data';
import { GWord } from '@/shared/Animations/GWord';

const BenefitListItem = ({ item, id }: { item: BenefitI; id: number }) => {
  const currentImageSrc =
    id === 0
      ? '/pages/about/benefits/first.svg'
      : id === 1
      ? '/pages/about/benefits/second.svg'
      : '/pages/about/benefits/third.svg';
  return (
    <li className={styles.listItem}>
      <Image
        alt=''
        src={currentImageSrc}
        width={180}
        height={155}
        className={styles.listItemImage}
      />
      <h3
        className={cn(
          styles.listItemTitle,
          commonStyles.headerThirdFontSize,
          headingFont.className
        )}
      >
        {item.title}
      </h3>
      <p
        className={cn(
          styles.listItemText,
          commonStyles.bodyFirstRegularFontSize,
          bodyFont.className
        )}
      >
        {item.desc}
      </p>
    </li>
  );
};

const Benefits = () => {
  const { width } = useWindowDimensions();
  const isTablet = width && width > MOBILE_WIDTH && width < TABLET_WIDTH;
  const gWordSizes = {
    width: width && width > TABLET_WIDTH ? 38 : 134,
    heigth: width && width > TABLET_WIDTH ? 38 : 134,
  };

  return (
    <div className={styles.sectionWrapper}>
      {!isTablet && <GWord sizes={gWordSizes} className={styles.gWord} />}
      <section className={styles.section}>
        <SectionTitle text='Причины выбрать FGF medical' />
        <ul className={styles.list}>
          {MOCK_BENEFITS.map((item, id) => (
            <BenefitListItem key={id} item={item} id={id} />
          ))}
        </ul>
        <Button
          className={styles.button}
          text='Перейти к услугам'
          type='primary'
        />
      </section>
    </div>
  );
};

export { Benefits };
