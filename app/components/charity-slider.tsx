
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useRef } from 'react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import { Indicator, Progress } from '@radix-ui/react-progress';
import Header from './home-section/Header';
import { charityItems } from '../constants';


export default function CharitySlider() {
  const swiperRef = useRef<SwiperType>(null)
  return (
    <div className="container mx-auto px-4 py-8 rtl" dir="rtl">
      <Header title='صدقة جارية' isSlider={true} button={{ text: 'عرض الكل', routerLink: '', swiperRef: swiperRef }} />

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
        {charityItems.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-variant border-2 border-border rounded-2xl overflow-hidden ">
              <div className="relative h-48">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-grays mb-4">{item.description}</p>
                <div className="space-y-2">
                  <Progress className="relative overflow-hidden bg-[#e9e9ee] rounded-full w-full h-2">
                    <Indicator dir='ltr'
                      className="bg-foreground w-full h-full rounded-full  transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
                      style={{ transform: `translateX(${100 - item.progress}%)` }}
                    />
                  </Progress>
                  <div className="flex justify-between text-sm">
                    <span className="text-grays">الحالي ${item.current}</span>
                    <span className="text-grays">المطلوب ${item.target}</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

