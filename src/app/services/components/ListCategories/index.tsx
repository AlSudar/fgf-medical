'use client';
import { Button } from '@/components/Button';
import styles from './index.module.scss';
import commonStyles from '@/common.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { SectionTitle } from '@/shared/SectionTitle';
import cn from 'classnames';
import { headingFont } from '@/assets/fonts';
import { FadeConfig } from '@/components/FadeConfig';
import useWindowDimensions from '@/hooks/useWindowSize';
import { TABLET_WIDTH } from '@/constants/data';
import { useEffect, useState } from 'react';
import { getListCategories } from '@/api/listCategories';
import { CategoryServicesI } from '@/api/listCategories/type';

const CategoryItem = ({ category }: { category: CategoryServicesI }) => {
  const { width } = useWindowDimensions();

  return (
    <li className={styles.categoryItem}>
      <Image
        src={
          width && width > TABLET_WIDTH
            ? category.imageSrc
            : category.imageTabletSrc
        }
        className={styles.categoryItemImage}
        width={100}
        height={100}
        alt=''
      />
      <p
        className={cn(
          styles.categoryItemTitle,
          commonStyles.headerThirdAdaptiveFontSize,
          headingFont.className
        )}
        dangerouslySetInnerHTML={{ __html: category.title }}
      />
      <Button
        type='primary-light'
        onClick={() => {
          document.querySelectorAll('.category').forEach((item) => {
            if (item.id === category.categoryLink) {
              window.location.hash = category.categoryLink;
              item.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'nearest',
              });
            }
          });
        }}
        className={styles.categoryItemButton}
        text={width && width > TABLET_WIDTH ? 'Подробнее' : ''}
        actionElement={
          <Image
            className={styles.categoryItemButtonImage}
            width={6}
            height={11}
            src='/pages/services/ListCategories/action.svg'
            alt=''
          />
        }
      />
    </li>
  );
};

const ListCategories = () => {
  const [listCategoriesData, setListCategoriesData] =
    useState<CategoryServicesI[]>();
  const evenNumber = listCategoriesData && listCategoriesData.length % 2 === 0;

  useEffect(() => {
    (async () => {
      const { data } = await getListCategories();

      if (data) {
        setListCategoriesData(data);
      }
    })();
  }, []);

  return (
    <section id='activateHeader' className={styles.sectionWrapper}>
      {listCategoriesData && listCategoriesData.length > 0 && (
        <div className={styles.section}>
          <SectionTitle type='secondary' text='Все виды услуг' />
          <ul className={cn(styles.list, !evenNumber && styles.listEven)}>
            {listCategoriesData.map((item, id) => {
              if (id < 6) {
                return <CategoryItem category={item} key={id} />;
              }

              return (
                <FadeConfig key={id}>
                  <CategoryItem category={item} key={id} />
                </FadeConfig>
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
};

export { ListCategories };
