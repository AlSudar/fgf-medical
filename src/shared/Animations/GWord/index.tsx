'use client';
import useWindowDimensions from '@/hooks/useWindowSize';
import styles from './index.module.scss';
import cn from 'classnames';
import { TABLET_WIDTH } from '@/constants/data';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import { WordI } from '../type';

const GWord = ({ className, sizes }: WordI) => {
  const { width } = useWindowDimensions();

  if (width) {
    const currentSizeUnit = width <= TABLET_WIDTH ? 'px' : 'rem';
    return (
      <Fade
        triggerOnce={true}
        className={cn(styles.fade, className)}
        childClassName={styles.active}
      >
        <div
          style={{
            width: `${sizes.width}${currentSizeUnit}`,
            height: `${sizes.heigth}${currentSizeUnit}`,
          }}
        >
          <Image
            className={styles.image}
            alt=''
            src='/components/animations/gword.svg'
            width={`${sizes.width}`}
            height={`${sizes.heigth}`}
          />
          <div className={styles.firstBlock} />
          <div className={styles.secondBlock} />
          <div className={styles.thirdBlock} />
        </div>
      </Fade>
    );
  }

  return <></>;
};

export { GWord };
