import { Button } from '@/components/Button';
import styles from './index.module.scss';
import commonStyles from '@/common.module.scss';
import cn from 'classnames';
import { bodyFont } from '@/assets/fonts';
import { FadeConfig } from '@/components/FadeConfig';

const Banner = () => {
  return (
    <section className={styles.section}>
      <FadeConfig>
        <>
          <p
            className={cn(
              bodyFont.className,
              commonStyles.bodyFirstRegularFontSize,
              styles.desc
            )}
          >
            Мы предлагаем более ХХХХ косметологических и beauty-процедур, среди
            которых ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus и
            многое другое.
          </p>
          <Button
            className={styles.button}
            text='Записаться'
            type='secondary'
          />
        </>
      </FadeConfig>
    </section>
  );
};

export { Banner };
