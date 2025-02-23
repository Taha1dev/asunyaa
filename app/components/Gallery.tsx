import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import SectionHeader, { HeaderProps } from './section-header/SectionHeader';
import { useRef } from 'react';
import Image from 'next/image';
import videoImage from '@/public/gallery.png'
export default function Gallery() {
  const headerProps: HeaderProps = {
    title: 'معرض الصور',
    isSlider: true,
    buttons: [
      {
        text: 'عرض الكل',
        onClick: () => console.log('View All Clicked'),
      },
    ],
  };
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
        {[1, 2, 3, 4,].map((_, index) => (
          <SwiperSlide key={index}>
            <Image key={index} src={videoImage} alt='video image' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
