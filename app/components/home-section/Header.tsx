import { ChevronRight, ChevronLeft } from 'lucide-react'
import React from 'react'

interface HeaderProps {
  isSlider: boolean,
  title: string,
  button: {
    text: string,
    routerLink: string,
    swiperRef?: any
  }
}

export default function Header(props: HeaderProps) {
  return (
    <div className="flex justify-between items-center gap-4 mb-6">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center sm:text-left">
        {props.title}
      </h2>

      {/* Buttons Section */}
      {props.isSlider ? (
        <section className="flex gap-2 sm:gap-4 items-center">
          {/* "Show All" Button */}
          <button className="bg-foreground hover:bg-red-700 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-sm sm:text-base transition-colors">
            عرض الكل
          </button>

          {/* Slider Navigation Buttons */}
          <button
            className="bg-variant border border-border rounded-full p-1 sm:p-2 shadow-md hover:bg-gray-100 transition-colors"
            onClick={() => props.button.swiperRef.current?.slidePrev()}
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-foreground" />
          </button>
          <button
            className="bg-variant border border-border rounded-full p-1 sm:p-2 shadow-md hover:bg-gray-100 transition-colors"
            onClick={() => props.button.swiperRef.current?.slideNext()}
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-foreground" />
          </button>
        </section>
      ) : (
        // Single Button (Non-Slider)
        <button className="bg-foreground hover:bg-red-700 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-sm sm:text-base transition-colors">
          {props.button.text}
        </button>
      )}
    </div>
  )
}