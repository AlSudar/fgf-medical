import commonStyles from '@/common.module.scss';
import styles from './index.module.scss';
import cn from 'classnames';
import { Button } from '@/components/Button';
import { bodyFont, headingFont } from '@/assets/fonts';

const Products = () => {
  return (
    <section className={styles.products}>
      <div className={styles.content}>
        <h2
          className={cn(
            styles.header,
            headingFont.className,
            commonStyles.headerSecondFontSize
          )}
        >
          Уходовая продукция
        </h2>
        <p
          className={cn(
            styles.desc,
            bodyFont.className,
            commonStyles.bodyFirstRegularFontSize
          )}
        >
          В целом сюда можно доабвить информацию о продукции, но уводить
          пользователя на другой сайт/ портал.
        </p>{' '}
        <p
          className={cn(
            styles.desc,
            bodyFont.className,
            commonStyles.bodyFirstRegularFontSize
          )}
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <Button text='Смотреть' className={styles.button} />
      </div>
      <div className={styles.swiper}></div>
    </section>
  );
};

export { Products };
