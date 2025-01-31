import { SectionTitle } from '@/shared/SectionTitle';
import { MOCK_CATEGORIES } from '../data';
import styles from './index.module.scss';
import commonStyles from '@/common.module.scss';
import cn from 'classnames';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { headingFont } from '@/assets/fonts';
import Image from 'next/image';
import { FadeConfig } from '@/components/FadeConfig';

const AllCategories = () => {
  return MOCK_CATEGORIES.map((item, id) => {
    const evenNumber = item.services.length % 2 === 0;

    if (item.services.length > 0) {
      return (
        <section key={id} className={styles.section} id={item.href}>
          <FadeConfig>
            <>
              <SectionTitle text={item.title} />
              <ul className={cn(styles.list, !evenNumber && styles.listEven)}>
                {item.services.map((service, id) => {
                  return (
                    <li
                      key={`service-${id}`}
                      className={styles.listItem}
                      style={{ display: service.hide ? 'none' : 'block' }}
                    >
                      <Link href={service.url} className={styles.listItemLink}>
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
};

export { AllCategories };
