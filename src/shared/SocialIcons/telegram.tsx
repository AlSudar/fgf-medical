import { SocialIconsColors } from './types';
import styles from './index.module.scss';
import { DARK_ICON, WHITE_ICON } from './data';

const TelegramIcon = ({ color }: { color: SocialIconsColors }) => {
  const currentSettings = color === 'dark' ? DARK_ICON : WHITE_ICON;

  return (
    <a href='#' target='blank' className={styles.link}>
      <svg
        width='32'
        height='33'
        viewBox='0 0 32 33'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={styles.icon}
      >
        <g clipPath='url(#clip0_2210_482)'>
          <rect
            y='0.25'
            width='32'
            height='32'
            rx='16'
            fill={currentSettings.color}
          />
          <path
            d='M16 -0.75C6.616 -0.75 -1 6.866 -1 16.25C-1 25.634 6.616 33.25 16 33.25C25.384 33.25 33 25.634 33 16.25C33 6.866 25.384 -0.75 16 -0.75ZM23.888 10.81C23.633 13.496 22.528 20.024 21.967 23.033C21.729 24.308 21.253 24.733 20.811 24.784C19.825 24.869 19.077 24.138 18.125 23.509C16.629 22.523 15.779 21.911 14.334 20.959C12.651 19.854 13.739 19.242 14.708 18.256C14.963 18.001 19.315 14.04 19.4 13.683C19.4118 13.6289 19.4102 13.5728 19.3954 13.5195C19.3806 13.4661 19.353 13.4172 19.315 13.377C19.213 13.292 19.077 13.326 18.958 13.343C18.805 13.377 16.425 14.958 11.784 18.086C11.104 18.545 10.492 18.783 9.948 18.766C9.336 18.749 8.18 18.426 7.313 18.137C6.242 17.797 5.409 17.61 5.477 17.015C5.511 16.709 5.936 16.403 6.735 16.08C11.699 13.921 14.997 12.493 16.646 11.813C21.372 9.841 22.341 9.501 22.987 9.501C23.123 9.501 23.446 9.535 23.65 9.705C23.82 9.841 23.871 10.028 23.888 10.164C23.871 10.266 23.905 10.572 23.888 10.81Z'
            fill={currentSettings.background}
          />
        </g>
        <defs>
          <clipPath id='clip0_2210_482'>
            <rect
              y='0.25'
              width='32'
              height='32'
              rx='16'
              fill={currentSettings.background}
            />
          </clipPath>
        </defs>
      </svg>
    </a>
  );
};

export { TelegramIcon };
