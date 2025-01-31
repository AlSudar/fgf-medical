import { bodyFont, headingFont } from '@/assets/fonts';
import styles from './index.module.scss';
import commonStyles from '@/common.module.scss';
import cn from 'classnames';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image} id='activateHeader' />
      <div className={cn(styles.content, bodyFont.className)}>
        <h1
          className={cn(
            styles.title,
            commonStyles.headerFirstFontSize,
            headingFont.className
          )}
        >
          О клинике
        </h1>
        <p className={cn(styles.desc, commonStyles.bodyFirstRegularFontSize)}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum
          dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
          eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
        </p>
        <p className={cn(styles.desc, commonStyles.bodyFirstRegularFontSize)}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <p className={cn(styles.desc, commonStyles.bodyFirstRegularFontSize)}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
      </div>
    </section>
  );
};

export { Hero };
