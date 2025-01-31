import { headingFont } from '@/assets/fonts';
import Link from 'next/link';
import styles from './index.module.scss';
import commonStyles from '@/common.module.scss';
import Image from 'next/image';
import cn from 'classnames';

const LinkToAllItems = ({ href, text }: { href: string; text: string }) => {
  return (
    <Link
      className={cn(
        styles.link,
        commonStyles.bodySecondFontSize,
        headingFont.className
      )}
      href={href}
    >
      {text}{' '}
      <Image
        className={styles.image}
        width={6}
        height={11}
        alt=''
        src='/pages/main/team/arrow-right.svg'
      />
    </Link>
  );
};

export { LinkToAllItems };
