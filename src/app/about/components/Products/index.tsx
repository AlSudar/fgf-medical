'use client';
import commonStyles from '@/common.module.scss';
import styles from './index.module.scss';
import cn from 'classnames';
import { Button } from '@/components/Button';
import { bodyFont, headingFont } from '@/assets/fonts';
import Image from 'next/image';
import { MOCK_PRODUCTS, ProductI } from './data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useRef, useState } from 'react';

const Product = ({ item, isActive }: { item: ProductI; isActive: boolean }) => {
  return (
    <div className={cn(isActive && styles.productActive, styles.product)}>
      <Image
        width={100}
        height={100}
        className={styles.productImage}
        src={item.imageSrc}
        alt={item.title}
      />
      <p
        className={cn(
          styles.productTitle,
          commonStyles.headerFourFontSize,
          headingFont.className
        )}
      >
        {item.title}
      </p>
      <p
        className={cn(
          styles.productDesc,
          commonStyles.bodyThirdFontSize,
          bodyFont.className
        )}
      >
        {item.desc}
      </p>
    </div>
  );
};

const Products = () => {
  const [productsData, setProductsData] = useState(MOCK_PRODUCTS);
  const [activeSlideId, setActiveSlideId] = useState(2);
  const refSwiper = useRef<HTMLDivElement>(null);
  const refCurrentTranslate = useRef<number>(20.5);
  const refProductsDataNeedsFiltered = useRef<'left' | 'rigth'>();
  const isFirstRender = useRef(true);
  const refArrayIsChange = useRef(false);

  useEffect(() => {
    if (
      isFirstRender.current &&
      refSwiper.current &&
      refCurrentTranslate.current
    ) {
      setProductsData((prevData) => {
        return [prevData[prevData.length - 1], ...prevData, prevData[0]];
      });
      refSwiper.current.style.transform = `translateX(${refCurrentTranslate.current}rem)`;
      isFirstRender.current = false;
    }
  }, []);

  const handleClickSlide = (id: number) => {
    if (refSwiper.current) {
      if (id < activeSlideId) {
        refCurrentTranslate.current += 20.5;
        refSwiper.current.style.transform = `translateX(${refCurrentTranslate.current}rem)`;
        // const nextActiveSlideId = 1;
        // setActiveSlideId(nextActiveSlideId);
      }

      if (id > activeSlideId) {
        refCurrentTranslate.current -= 20.5;
        refSwiper.current.style.transform = `translateX(${refCurrentTranslate.current}rem)`;
        // const nextActiveSlideId = activeSlideId + 1;
        // setActiveSlideId(nextActiveSlideId);
        // refProductsDataNeedsFiltered.current = 'left';
      }
      refArrayIsChange.current = true;
    }
  };

  useEffect(() => {
    if (refArrayIsChange.current && refSwiper.current) {
      refSwiper.current.style.transform = `translateX(${20.5}rem)`;
      refArrayIsChange.current = false;
      setProductsData((prevData) => {
        return [prevData[prevData.length - 1], ...prevData, prevData[0]];
      });
    }
  }, [productsData]);

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
      <div className={styles.swiperWrapper}>
        <div ref={refSwiper} className={styles.swiper}>
          {productsData.map((item, id) => (
            <div
              onClick={() => handleClickSlide(id)}
              className={styles.slide}
              key={id}
            >
              <Product isActive={id === activeSlideId} item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Products };
