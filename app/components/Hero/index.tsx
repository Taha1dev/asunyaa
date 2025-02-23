"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules"
import Image from "next/image"
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"
import './style.css'
import banner from '@/public/main-banner.jpg'
import StatsCard from "./Stats"
const slides = [
  {
    image: banner,
    title: "معاً نصنع التغيير، معاً نحو الأفضل",
    description: "الرؤية المستقبلية للتنمية المستدامة في المملكة العربية السعودية من خلال تمكين المجتمع وتعزيز التنمية",
  },
  {
    image: banner,
    title: "نبني المستقبل معاً",
    description: "من خلال العمل الجماعي والتعاون المستمر نحقق أهدافنا المشتركة",
  },
  {
    image: banner,
    title: "نحو مجتمع أفضل",
    description: "نسعى لتحقيق التنمية المستدامة وتمكين المجتمع",
  },
]

export default function HeroSlider() {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden ">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt="Hero background"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
                <div className="container mx-auto max-w-4xl">
                  <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">{slide.title}</h1>
                  <p className="mb-12 text-lg md:text-xl">{slide.description}</p>
                </div>

              </div>
            </div>
            {/* <div className="flex items-center justify-center">
              <StatsCard />
            </div> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

