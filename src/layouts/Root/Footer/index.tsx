'use client';
import { Logo } from '@/shared/Logo';
import Link from 'next/link';
import styles from './index.module.scss';
import commonStyles from '@/common.module.scss';
import { EMAIL_LINK, Routes, TEL_NUMBER } from '@/constants/urls';
import { TelegramIcon } from '@/shared/SocialIcons/telegram';
import { WhatsappIcon } from '@/shared/SocialIcons/whatsapp';
import cn from 'classnames';
import { bodyFont, headingFont } from '@/assets/fonts';
import useWindowDimensions from '@/hooks/useWindowSize';
import { MOBILE_WIDTH } from '@/constants/data';

const Contacts = () => {
  return (
    <>
      <a href='#'>{EMAIL_LINK}</a>
      <a href='#'>{TEL_NUMBER}</a>
    </>
  );
};

const Copyright = () => <span>© ООО «ЭФ ДЖИ ЭФ» 2024</span>;

const Footer = () => {
  const { width } = useWindowDimensions();
  const isMobile = width ? MOBILE_WIDTH > width : false;

  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footer}>
        <Link href={Routes.MAIN}>
          <Logo className={styles.logo} color='#3E3937' />
        </Link>
        <div className={styles.footerContentWrapper}>
          <h2
            className={cn(
              styles.footerTitle,
              commonStyles.headerSecondFontSize,
              headingFont.className
            )}
          >
            Контакты
          </h2>
          <div
            className={cn(
              styles.footerContent,
              commonStyles.bodySecondFontSize,
              bodyFont.className
            )}
          >
            <ul className={styles.footerListLinks}>
              <li className={styles.footerListItem}>
                <Link href='#' className={styles.footerListItemLink}>
                  Онлайн-запись
                </Link>
              </li>
              <li className={styles.footerListItem}>
                <Link href={Routes.ABOUT} className={styles.footerListItemLink}>
                  О клинике
                </Link>
              </li>
              <li className={styles.footerListItem}>
                <Link
                  href={Routes.SERVICES}
                  className={styles.footerListItemLink}
                >
                  Услуги
                </Link>
              </li>
              <li className={styles.footerListItem}>
                <Link
                  href={Routes.SPECIALISTS}
                  className={styles.footerListItemLink}
                >
                  Специалисты
                </Link>
              </li>
              <li className={styles.footerListItem}>
                <Link href='#' className={styles.footerListItemLink}>
                  Продукты
                </Link>
              </li>
            </ul>
            <div className={styles.footerContentDesc}>
              {isMobile && <Contacts />}
              <span>
                г. Санкт-Петербург, ул. Адресная,
                <br /> дом 12
              </span>
              <span>Ежедневно с&nbsp;9.00&nbsp;до&nbsp;21.00</span>
              <span>
                Можно еще&nbsp;добавить ближайшую станцию метро, как&nbsp;пройти
                ( куда повернуть и тп)
              </span>
              {!isMobile && <Copyright />}
            </div>
            <div className={styles.socialsWrapper}>
              {!isMobile && <Contacts />}
              {isMobile && <Copyright />}
              <div className={styles.socialIconsWrapper}>
                <TelegramIcon color='dark' />
                <WhatsappIcon color='dark' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
