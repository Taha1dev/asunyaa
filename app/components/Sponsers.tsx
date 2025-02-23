import React from 'react'
import Image from 'next/image'


import { sponsers } from '../constants'



export default function Sponsers() {
  return (
    <div className=' bg-[#e9e9ee] flex flex-wrap justify-evenly py-4 items-center gap-16 backdrop-blur-lg flex-col sm:flex-row'>
      {sponsers.reverse().map(item => (
        <Image
          key={item.id}
          src={item.src}
          alt={item.alt}
          height={item.height}
          width={item.width}
          loading={item.loading}
        />
      ))}
    </div>
  )
}
