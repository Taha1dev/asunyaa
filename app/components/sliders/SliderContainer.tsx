import React from 'react'
import CharitySlider from './charity-slider'
import MICSlider from './mic-slider'
import OngoingSlider from './ongoingCharity-slider'

export default function SliderContainer() {
  return (
    <>
      <MICSlider />
      <OngoingSlider />
      <CharitySlider />
    </>
  )
}
