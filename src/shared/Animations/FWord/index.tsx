'use client';
import { WordI } from '../type';
import cn from 'classnames';
import styles from './index.module.scss';
import { Fade } from 'react-awesome-reveal';
import { TABLET_WIDTH } from '@/constants/data';
import useWindowDimensions from '@/hooks/useWindowSize';
import Image from 'next/image';

const FWord = ({ className, sizes }: WordI) => {
  const { width } = useWindowDimensions();

  if (width) {
    const currentSizeUnit = width <= TABLET_WIDTH ? 'px' : 'rem';
    return (
      <Fade
        style={{
          width: `${sizes.width}${currentSizeUnit}`,
          height: `${sizes.heigth}${currentSizeUnit}`,
        }}
        className={cn(styles.fade, className)}
        childClassName={styles.active}
      >
        <div>
          <Image
            alt=''
            src='/components/animations/fword.svg'
            width={sizes.width}
            height={sizes.heigth}
            className={styles.image}
          />
          <div className={styles.top} />
          <div className={styles.left} />
          <div className={styles.center} />
        </div>
      </Fade>
    );
  }

  return <></>;
};

export { FWord };
