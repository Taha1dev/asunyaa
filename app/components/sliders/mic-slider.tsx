import React from 'react'
import Slider from '../Slider';
import { charitySliderItems, MICSliderItems } from '@/app/constants';
import { renderItem } from './Item';
import { HeaderProps } from '../section-header/SectionHeader';

export default function MICSlider() {
  const headerProps: HeaderProps = {
    title: 'أهم الحملات',
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
      items={MICSliderItems as any}
      renderItem={renderItem}
      headerProps={headerProps}
      isMoreView={{ result: false, href: '' }}
    />
  )
}
