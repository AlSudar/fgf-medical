import cn from 'classnames';
import styles from './index.module.scss';
import commonStyles from '@/common.module.scss';
import { headingFont } from '@/assets/fonts';

const SectionTitle = ({
  text,
  className,
  type = 'primary',
}: {
  text: string;
  className?: string;
  type?: 'primary' | 'secondary';
}) => {
  return (
    <h2
      className={cn(
        styles.title,
        styles[type],
        headingFont.className,
        commonStyles.headerSecondFontSize,
        className
      )}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export { SectionTitle };
