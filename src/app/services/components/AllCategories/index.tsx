import { SectionTitle } from '@/shared/SectionTitle';
import styles from './index.module.scss';
import commonStyles from '@/common.module.scss';
import cn from 'classnames';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { headingFont } from '@/assets/fonts';
import Image from 'next/image';
import { FadeConfig } from '@/components/FadeConfig';
import { useEffect, useRef, useState } from 'react';
import { ServicesCategoryI } from '@/api/servicesCategories/type';
import { getServicesCategories } from '@/api/servicesCategories';

const AllCategories = () => {
  const isFirstRender = useRef(true);
  const [servicesCategoriesData, setServicesCategoriesData] =
    useState<ServicesCategoryI[]>();

  useEffect(() => {
    (async () => {
      const { data } = await getServicesCategories();

      if (data) {
        setServicesCategoriesData(data);
      }
    })();
  }, []);

  useEffect(() => {
    if (window && isFirstRender && servicesCategoriesData) {
      const hash = window.location.hash;
      document.querySelectorAll('.category').forEach((item) => {
        if (`#${item.id}` === hash) {
          item.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'nearest',
          });
        }
      });
      isFirstRender.current = false;
    }
  }, [servicesCategoriesData]);

  if (servicesCategoriesData) {
    return servicesCategoriesData.map((item, id) => {
      const evenNumber = item.services.length % 2 === 0;

      if (item.services.length > 0) {
        return (
          <section
            key={id}
            className={cn('category', styles.section)}
            id={item.categoryId}
          >
            <FadeConfig>
              <>
                <SectionTitle text={item.title} />
                <ul className={cn(styles.list, !evenNumber && styles.listEven)}>
                  {item.services.map((service, id) => {
                    return (
                      <li
                        key={`service-${id}`}
                        className={styles.listItem}
                        style={{ display: service.visible ? 'none' : 'block' }}
                      >
                        <Link
                          href={service.link}
                          className={styles.listItemLink}
                        >
                          <p
                            className={cn(
                              styles.listItemTitle,
                              headingFont.className,
                              commonStyles.headerThirdFontSize
                            )}
                          >
                            {service.title}
                          </p>
                          <Button
                            text=''
                            type='primary-light'
                            className={styles.listItemButton}
                            actionElement={
                              <Image
                                alt=''
                                width={6}
                                height={11}
                                src='/pages/services/ListCategories/action.svg'
                                className={styles.listItemButtonImage}
                              />
                            }
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            </FadeConfig>
          </section>
        );
      }

      return <></>;
    });
  }
};

export { AllCategories };
