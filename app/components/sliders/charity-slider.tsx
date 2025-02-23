import React from 'react'
import Slider from '../Slider'
import { SliderItem, charitySliderItems } from '@/app/constants'
import { HeaderProps } from '../section-header/SectionHeader';
import Image from 'next/image';
import Link from 'next/link';
import { renderItem } from './Item';

export default function CharitySlider() {
  const headerProps: HeaderProps = {
    title: 'مشاريعنا الخيرية',
    isSlider: true,
    buttons: [
      {
        text: 'عرض الكل',
        onClick: () => console.log('View All Clicked'),
      },
    ],
  };

  return (
    <Slider
      items={charitySliderItems as any}
      renderItem={renderItem}
      headerProps={headerProps}
      isMoreView={{ result: true, href: '' }}
    />
  )
}
