import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import SectionHeader, { HeaderProps } from './section-header/SectionHeader';

interface SliderProps<T> {
  items: T[];
  renderItem: (item: T, isMoreView: boolean) => React.ReactNode;
  headerProps: HeaderProps;
  isMoreView: {
    result: boolean;
    href?: string;
  };
}

export default function Slider<T>({ items, renderItem, headerProps, isMoreView }: SliderProps<T>) {
  const swiperRef = useRef<SwiperType>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <SectionHeader {...headerProps} swiperRef={swiperRef} />

      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="relative"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{renderItem(item, isMoreView.result)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}