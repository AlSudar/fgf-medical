'use client';
import { Button } from '@/components/Button';
import { Routes } from '@/constants/urls';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import cn from 'classnames';
import styles from './index.module.scss';
import commonStyles from '@/common.module.scss';
import { bodyFont } from '@/assets/fonts';
import useWindowDimensions from '@/hooks/useWindowSize';
import { MOBILE_WIDTH, TABLET_WIDTH } from '@/constants/data';
import { FWordReversed } from '@/shared/Animations/FWordReversed';
import { GWord } from '@/shared/Animations/GWord';

const NotFound = () => {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const fWordReversed = {
    width:
      width && width < MOBILE_WIDTH
        ? 103
        : width && width > TABLET_WIDTH
        ? 22
        : 132,
    heigth:
      width && width < MOBILE_WIDTH
        ? 278
        : width && width > TABLET_WIDTH
        ? 60
        : 356,
  };
  const gWord = {
    width:
      width && width < MOBILE_WIDTH
        ? 201
        : width && width > TABLET_WIDTH
        ? 48
        : 286,
    heigth:
      width && width < MOBILE_WIDTH
        ? 201
        : width && width > TABLET_WIDTH
        ? 48
        : 286,
  };

  return (
    <div className={styles.sectionWrapper}>
      {fWordReversed && (
        <FWordReversed sizes={fWordReversed} className={styles.fWordReversed} />
      )}
      {gWord && <GWord sizes={gWord} className={styles.gWord} />}
      <section className={styles.section}>
        <Image
          width={298}
          height={140}
          alt=''
          src='/pages/not-found/not-found.svg'
          className={styles.sectionImage}
        />
        <span
          className={cn(
            bodyFont.className,
            styles.desc,
            commonStyles.bodyFirstRegularFontSize
          )}
        >
          Страница не&nbsp;найдена. Возможно, она устарела или&nbsp;была
          удалена. Вы&nbsp;можете перейти на&nbsp;главную страницу
          и&nbsp;попробовать найти интересующую информацию там.
        </span>
        <Button
          className={styles.button}
          text='На главную'
          onClick={() => router.push(Routes.MAIN)}
        />
      </section>
    </div>
  );
};

export { NotFound };
