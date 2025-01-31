'use client';
import styles from './index.module.scss';
import commonStyles from '@/common.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import { bodyFont, headingFont } from '@/assets/fonts';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/Button';
import { AdvancedSpecialistI } from '@/constants/types';
import useWindowDimensions from '@/hooks/useWindowSize';
import { MOBILE_WIDTH, TABLET_WIDTH } from '@/constants/data';
import { Routes } from '@/constants/urls';
import { LinkToAllItems } from '@/shared/LinkToAllItems';

const ListItem = ({
  item,
  onHandlerChangeActiveSpecialist,
  activeSpecialist,
  withQuote,
  position,
  currentCountColumns,
}: {
  position: number;
  withQuote: boolean;
  activeSpecialist: AdvancedSpecialistI;
  item: AdvancedSpecialistI;
  currentCountColumns: number;
  onHandlerChangeActiveSpecialist: (
    specialist: AdvancedSpecialistI,
    nextPosition: number
  ) => void;
}) => {
  const currentPosition = position === 0 ? 1 : position;
  const positionForStartLine = Math.ceil(currentPosition / currentCountColumns);
  const currentId = `specialist-item-${item.positionOnList}`;

  if (activeSpecialist.id === item.id) {
    return <ActiveSpecialist withQuote={withQuote} specialist={item} />;
  }

  return (
    <li className={styles.listItem}>
      <div
        id={currentId}
        onClick={() => {
          onHandlerChangeActiveSpecialist(item, positionForStartLine);
        }}
      >
        <Image
          width={211}
          height={196}
          alt={`${item.name} ${item.lastName}`}
          src={item.img}
          className={styles.listItemImage}
        />
        <p
          className={cn(
            styles.listItemTitle,
            commonStyles.headerThirdAdaptiveFontSize,
            headingFont.className
          )}
        >
          {item.lastName} {item.name}
        </p>
        <p
          className={cn(
            styles.listItemText,
            commonStyles.bodySecondFontSize,
            bodyFont.className
          )}
        >
          {item.speciality}
        </p>
      </div>
    </li>
  );
};

const ActiveSpecialist = ({
  specialist,
  withQuote,
}: {
  specialist: AdvancedSpecialistI;
  withQuote: boolean;
}) => {
  const currentId = `specialist-item-${specialist.positionOnList}`;
  return (
    <li className={styles.activeSpecialist} id={currentId}>
      <Image
        width={406}
        height={336}
        alt={`${specialist.name} ${specialist.lastName}`}
        src={specialist.img}
        className={styles.activeSpecialistImage}
      />
      <div className={styles.activeSpecialistContent}>
        <p
          className={cn(
            styles.activeSpecialistTitle,
            commonStyles.headerThirdFontSize,
            headingFont.className
          )}
        >
          {specialist.lastName} {specialist.name}
        </p>
        <p
          className={cn(
            styles.activeSpecialistSubtitle,
            commonStyles.bodySecondFontSize,
            bodyFont.className
          )}
        >
          Стаж {specialist.experience}
        </p>
        <p
          className={cn(
            styles.activeSpecialistSubtitle,
            commonStyles.bodySecondFontSize,
            bodyFont.className
          )}
        >
          {specialist.speciality}
        </p>
        <p
          className={cn(
            styles.activeSpecialistText,
            commonStyles.bodyFirstRegularFontSize,
            bodyFont.className
          )}
        >
          {specialist.desc}
        </p>
        {withQuote && specialist.quote && (
          <p
            className={cn(
              styles.activeSpecialistQuote,
              commonStyles.bodyFirstRegularFontSize,
              bodyFont.className
            )}
          >
            {specialist.quote}
          </p>
        )}
        <Button
          text='Записаться'
          type='primary'
          className={styles.activeSpecialistButton}
        />
      </div>
    </li>
  );
};

const ListSpecialists = ({
  specialists,
  type = 'secondary',
  size = 'little',
  withQuote = false,
  withAllSpecialist = false,
}: {
  specialists: AdvancedSpecialistI[];
  type?: 'primary' | 'secondary';
  size?: 'little' | 'big';
  withQuote?: boolean;
  withAllSpecialist?: boolean;
}) => {
  const { width } = useWindowDimensions();
  const [activeSpecialist, setActiveSpecialist] = useState<AdvancedSpecialistI>(
    specialists[0]
  );
  const [specialistsData, setSpecialistsData] = useState(specialists);
  const currentCountColumns =
    width && (width < MOBILE_WIDTH ? 2 : width < TABLET_WIDTH ? 3 : 4);

  useEffect(() => {
    const header = document.getElementById('header');
    if (document && activeSpecialist && header) {
      const activeSpecialistElement = document.getElementById(
        `specialist-item-${activeSpecialist.positionOnList}`
      );
      if (activeSpecialistElement) {
        const headerHeight = header.clientHeight;
        const activeItemTopCoordinat =
          activeSpecialistElement.getBoundingClientRect().top +
          window.pageYOffset;
        if (headerHeight && activeItemTopCoordinat) {
          window.scrollTo({
            top: activeItemTopCoordinat - headerHeight,
            behavior: 'smooth',
          });
        }
      }
    }
  }, [activeSpecialist]);

  const onChangeActiveSpecialist = (
    specialist: AdvancedSpecialistI,
    startRow: number
  ) => {
    if (currentCountColumns) {
      let currentNextPosition =
        startRow === 1 ? 0 : (startRow - 1) * currentCountColumns;
      let newSpecialistsData = structuredClone(specialistsData).filter(
        (item) => Number(item.id) !== Number(specialist.id)
      );

      newSpecialistsData.sort((a, b) => {
        if (b.id === specialist.id || a.id === specialist.id) {
          return 0;
        }

        return a.positionOnList - b.positionOnList;
      });
      newSpecialistsData.splice(currentNextPosition, 0, specialist);

      setSpecialistsData(newSpecialistsData);
      setActiveSpecialist(specialist);
    }
  };

  return (
    <div className={styles[type]}>
      {currentCountColumns && (
        <ul className={cn(styles.list, styles[size])}>
          {specialistsData.map((item, id) => (
            <ListItem
              position={id}
              withQuote={withQuote}
              activeSpecialist={activeSpecialist}
              onHandlerChangeActiveSpecialist={onChangeActiveSpecialist}
              key={id}
              item={item}
              currentCountColumns={currentCountColumns}
            />
          ))}
        </ul>
      )}
      {withAllSpecialist && (
        <LinkToAllItems
          href={Routes.SPECIALISTS}
          text='Смотреть всех специалистов'
        />
      )}
    </div>
  );
};

export { ListSpecialists };
