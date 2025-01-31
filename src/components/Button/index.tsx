import { ReactElement } from 'react';
import styles from './index.module.scss';
import stylesCommon from '@/common.module.scss';
import cn from 'classnames';
import { headingFont } from '@/assets/fonts';

type ButtonTypes =
  | 'primary'
  | 'primary-light'
  | 'secondary-light'
  | 'secondary';

const Button = ({
  text,
  onClick,
  type = 'primary',
  className,
  actionElement = null,
}: {
  text: string;
  onClick?: () => void;
  type?: ButtonTypes;
  className?: string;
  actionElement?: ReactElement | null;
}) => {
  const currentClassname = cn(
    styles.button,
    stylesCommon.bodySecondFontSize,
    styles[type],
    headingFont.className,
    className
  );

  return (
    <button className={currentClassname} onClick={onClick && onClick}>
      {text} {actionElement}
    </button>
  );
};

export { Button };
