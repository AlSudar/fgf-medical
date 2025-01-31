import styles from './index.module.scss';
import commonStyles from '@/common.module.scss';
import { Button } from '@/components/Button';
import cn from 'classnames';
import { bodyFont, headingFont } from '@/assets/fonts';
import { FadeConfig } from '@/components/FadeConfig';

const Consultation = () => {
  return (
    <FadeConfig>
      <section className={styles.sectionWrapper}>
        <div className={styles.section}>
          <h2
            className={cn(
              styles.title,
              commonStyles.headerSecondFontSize,
              headingFont.className
            )}
          >
            Запишитесь на&nbsp;консультацию
          </h2>
          <div className={styles.content}>
            <p
              className={cn(
                styles.desc,
                bodyFont.className,
                commonStyles.bodyFirstRegularFontSize
              )}
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </p>
            <Button
              text='Записаться'
              type='secondary'
              className={styles.button}
            />
          </div>
        </div>
      </section>
    </FadeConfig>
  );
};

export { Consultation };
