import { ChevronRight, ChevronLeft } from 'lucide-react';
import React from 'react';

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  icon?: React.ReactNode;
}

export interface HeaderProps {
  title: string;
  buttons?: ButtonProps[];
  isSlider?: boolean;
  swiperRef?: React.MutableRefObject<any>;
}

export default function SectionHeader({ title, buttons, isSlider, swiperRef }: HeaderProps) {
  
  return (
    <div className="flex justify-between items-center gap-4 mb-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center sm:text-left">
        {title}
      </h2>

      {isSlider ? (
        <section className="flex gap-2 sm:gap-4 items-center">
          {buttons?.map((button, index) => (
            <button
              key={index}
              className="bg-foreground hover:bg-red-700 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-sm sm:text-base transition-colors"
              onClick={button.onClick}
            >
              {button.text}
            </button>
          ))}
          <button
            className="bg-variant border border-border rounded-full p-1 sm:p-2 shadow-md hover:bg-gray-100 transition-colors"
            onClick={() => swiperRef?.current?.slidePrev()}
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-foreground" />
          </button>
          <button
            className="bg-variant border border-border rounded-full p-1 sm:p-2 shadow-md hover:bg-gray-100 transition-colors"
            onClick={() => swiperRef?.current?.slideNext()}
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-foreground" />
          </button>
        </section>
      ) : (
        buttons?.map((button, index) => (
          <button
            key={index}
            className="bg-foreground hover:bg-red-700 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-sm sm:text-base transition-colors"
            onClick={button.onClick}
          >
            {button.text}
          </button>
        ))
      )}
    </div>
  );
}