import styles from './index.module.scss';
import commonStyles from '@/common.module.scss';
import { SectionTitle } from '@/shared/SectionTitle';
import { Button } from '@/components/Button';
import cn from 'classnames';
import { bodyFont } from '@/assets/fonts';
import { FadeConfig } from '@/components/FadeConfig';
import { useRouter } from 'next/navigation';
import { Routes } from '@/constants/urls';

const About = () => {
  const router = useRouter();
  const descClassNames = cn(
    styles.desc,
    commonStyles.bodyFirstRegularFontSize,
    bodyFont.className
  );
  return (
    <section className={styles.sectionWrapper}>
      <FadeConfig>
        <div className={styles.section}>
          <SectionTitle className={styles.title} text='О клинике' />
          <div className={styles.content}>
            <p className={descClassNames}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <p className={descClassNames}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <Button
              onClick={() => router.push(Routes.ABOUT)}
              className={styles.button}
              type='primary'
              text='Подробнее'
            />
          </div>
        </div>
      </FadeConfig>
    </section>
  );
};

export { About };
