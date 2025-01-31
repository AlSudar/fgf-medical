'use client';
import styles from './index.module.scss';
import commonStyles from '@/common.module.scss';
import { Logo } from '@/shared/Logo';
import { useEffect, useState } from 'react';
import { Button } from '@/components/Button';
import { TelegramIcon } from '@/shared/SocialIcons/telegram';
import { WhatsappIcon } from '@/shared/SocialIcons/whatsapp';
import Link from 'next/link';
import cn from 'classnames';
import { bodyFont } from '@/assets/fonts';
import useWindowDimensions from '@/hooks/useWindowSize';
import { MOBILE_WIDTH, TABLET_WIDTH } from '@/constants/data';
import { Routes } from '@/constants/urls';

const Menu = ({ onHandlerClick }: { onHandlerClick: () => void }) => {
  return (
    <div className={styles.headerMenuWrapper}>
      <div className={styles.headerMenu}>
        <button className={styles.headerButton} onClick={onHandlerClick} />
        <nav className={styles.headerNav}>
          <ul
            className={cn(
              styles.headerNavList,
              bodyFont.className,
              commonStyles.headerThirdAdaptiveFontSize
            )}
          >
            <li className={styles.headerNavItem}>
              <Link className={styles.headerNavLink} href='#'>
                Онлайн-запись
              </Link>
            </li>
            <li className={styles.headerNavItem}>
              <Link className={styles.headerNavLink} href={Routes.ABOUT}>
                О клинике
              </Link>
            </li>
            <li className={styles.headerNavItem}>
              <Link className={styles.headerNavLink} href={Routes.SERVICES}>
                Услуги
              </Link>
            </li>
            <li className={styles.headerNavItem}>
              <Link className={styles.headerNavLink} href={Routes.SPECIALISTS}>
                Специалисты
              </Link>
            </li>
            <li className={styles.headerNavItem}>
              <Link className={styles.headerNavLink} href='#'>
                Продукты
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

const BurgerButton = ({ onHandlerClick }: { onHandlerClick: () => void }) => {
  return <button className={styles.burgerButton} onClick={onHandlerClick} />;
};

const PAGES_WITH_WHITE_HEADERS = ['specialists'];

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isWhiteHeader, setIsWhiteHeader] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (window) {
      const pathNames = window.location.pathname
        .split('/')
        .filter((item) => item !== '');
      const pathName = pathNames[pathNames.length - 1];
      const isWhiteHeader = PAGES_WITH_WHITE_HEADERS.includes(pathName);
      setIsWhiteHeader(isWhiteHeader);
    }
  }, []);

  useEffect(() => {
    if (document) {
      document.getElementById('header')?.style.removeProperty('display');
    }
  }, []);

  const onHandlerShowMenu = () => setShowMenu(!showMenu);
  const onHandlerClickOnlineBookingButton = () => console.log('click');

  return (
    <header
      style={{ display: 'none' }}
      id='header'
      className={cn(styles.header, isWhiteHeader && styles.headerWhite)}
    >
      {showMenu && <Menu onHandlerClick={onHandlerShowMenu} />}
      <div className={styles.headerContent}>
        <BurgerButton onHandlerClick={onHandlerShowMenu} />
        <Link href={Routes.MAIN}>
          <Logo
            color={isWhiteHeader ? '#3E3937' : '#f0ebe8'}
            className={styles.logo}
          />
        </Link>
        <div className={styles.actionsWrapper}>
          <Button
            className={styles.actionsWrapperButton}
            onClick={onHandlerClickOnlineBookingButton}
            type={isWhiteHeader ? 'primary' : 'secondary'}
            text={
              width && width <= MOBILE_WIDTH ? 'Записаться' : 'Онлайн-запись'
            }
          />
          <div className={styles.socialsWrapper}>
            <TelegramIcon color={isWhiteHeader ? 'dark' : 'white'} />
            <WhatsappIcon color={isWhiteHeader ? 'dark' : 'white'} />
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
