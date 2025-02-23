import React from 'react'
import { HeaderProps } from '../section-header/SectionHeader';
import { charitySliderItems, OngoingSliderItems } from '@/app/constants';
import { renderItem } from './Item';
import Slider from '../Slider';

export default function OngoingSlider() {
  const headerProps: HeaderProps = {
    title: 'صدقة جارية',
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
      items={OngoingSliderItems as any}
      renderItem={renderItem}
      headerProps={headerProps}
      isMoreView={{ result: false, href: '' }}
    />
  )
}
