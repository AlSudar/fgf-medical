'use client';

import { bodyFont, headingFont } from '@/assets/fonts';
import { Button } from '@/components/Button';
import { useEffect, useRef, useState } from 'react';
import { MOCK } from '../../app/main/components/Team/data';
import styles from './index.module.scss';
import commonStyles from '@/common.module.scss';
import Image from 'next/image';
import cn from 'classnames';
import { SpecialistI } from '@/constants/types';

const AnimatedWidthListSpecialists = ({
  specialists,
}: {
  specialists: SpecialistI[];
}) => {
  const [idItemActive, setIdItemActive] = useState(0);
  const refList = useRef<null | HTMLUListElement>(null);

  const onHandlerHover = (id: number) => setIdItemActive(id);

  useEffect(() => {
    if (refList.current) {
      refList.current.querySelectorAll('#list-item').forEach((item) => {
        const currentItem = item as HTMLElement;
        const listItemBottom = currentItem.querySelector('#list-item-bottom');
        if (listItemBottom) {
          currentItem.style.height =
            41.2 + listItemBottom.clientHeight / 10 + 'rem';
        }
      });
    }
  }, []);

  return (
    <ul ref={refList} className={styles.content}>
      {specialists.map((item, id) => {
        return (
          <li
            id={`list-item`}
            onClick={() => onHandlerHover(id)}
            className={cn(
              styles.item,
              id === idItemActive ? styles.itemActive : styles.itemInactive
            )}
            key={id}
          >
            <div className={styles.itemImageWrapper}>
              <Image
                src={item.img}
                alt={`${item.name} ${item.lastName}`}
                className={styles.itemImage}
                width={255}
                height={500}
              />
            </div>
            <div className={cn(styles.itemContent, bodyFont.className)}>
              <p
                className={cn(
                  styles.title,
                  headingFont.className,
                  commonStyles.bodySecondFontSize
                )}
              >
                {item.name} {item.lastName}
              </p>
              <p
                className={cn(
                  styles.experience,
                  styles.subtitle,
                  commonStyles.bodySecondFontSize
                )}
              >
                Стаж {item.experience}
              </p>
              <p
                className={cn(
                  styles.subtitle,
                  styles.speciality,
                  commonStyles.bodyThirdFontSize
                )}
              >
                {item.speciality}
              </p>
              <p className={cn(styles.text, commonStyles.bodySecondFontSize)}>
                {item.desc}
              </p>
              <Button
                className={styles.button}
                text='Записаться'
                type='primary'
              />
            </div>
            <div
              id={`list-item-bottom`}
              className={cn(styles.itemBottomContent, bodyFont.className)}
            >
              <p
                className={cn(
                  styles.itemBottomContentTitle,
                  headingFont.className,
                  commonStyles.headerThirdFontSize
                )}
              >
                {item.name} {item.lastName}
              </p>
              <p
                className={cn(
                  styles.itemBottomContentTitleSubtitle,
                  commonStyles.bodySecondFontSize
                )}
              >
                {item.speciality}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export { AnimatedWidthListSpecialists };
