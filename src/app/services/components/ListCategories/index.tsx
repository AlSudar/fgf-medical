'use client';
import { Button } from '@/components/Button';
import { CategoryI, MOCK_CATEGORIES } from '../data';
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

const CategoryItem = ({ item }: { item: CategoryI }) => {
  const router = useRouter();
  const { width } = useWindowDimensions();

  return (
    <li className={styles.categoryItem}>
      <Image
        src={item.image}
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
        dangerouslySetInnerHTML={{ __html: item.title }}
      />
      <Button
        type='primary-light'
        onClick={() => router.push(`#${item.href}`)}
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
  const evenNumber = MOCK_CATEGORIES.length % 2 === 0;

  return (
    <section id='activateHeader' className={styles.sectionWrapper}>
      {MOCK_CATEGORIES && MOCK_CATEGORIES.length > 0 && (
        <div className={styles.section}>
          <SectionTitle type='secondary' text='Все виды услуг' />
          <ul className={cn(styles.list, !evenNumber && styles.listEven)}>
            {MOCK_CATEGORIES.map((item, id) => {
              if (id < 6) {
                return <CategoryItem item={item} key={id} />;
              }

              return (
                <FadeConfig key={id}>
                  <CategoryItem item={item} key={id} />
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
