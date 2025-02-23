import img1 from '@/public/m1.png'
import img2 from '@/public/m2.png'
import img3 from '@/public/m3.png'

import brand1 from '@/public/brands/brand-2.png'
import brand2 from '@/public/brands/brand-3.png'
import brand3 from '@/public/brands/brand-4.png'
import brand4 from '@/public/brands/brand-5.png'
import brand5 from '@/public/brands/brand-6.png'

interface SponsersDataProps {
  id: number | string
  src: string | any
  height: number
  width: number
  alt: string
  loading: 'eager' | 'lazy'
}

export const sponsers: SponsersDataProps[] = [
  {
    id: 1,
    src: brand1,
    height: 80,
    width: 180,
    alt: '',
    loading: 'lazy',
  },
  {
    id: 2,
    src: brand2,
    height: 80,
    width: 180,
    alt: '',
    loading: 'lazy',
  },
  {
    id: 3,
    src: brand3,
    height: 80,
    width: 180,
    alt: '',
    loading: 'lazy',
  },
  {
    id: 4,
    src: brand4,
    height: 80,
    width: 180,
    alt: '',
    loading: 'lazy',
  },
  {
    id: 5,
    src: brand5,
    height: 80,
    width: 180,
    alt: '',
    loading: 'lazy',
  },
]

export interface CharityItem {
  id: number
  image: string | any
  title: string
  description: string
  target: number
  current: number
  progress: number
}

export const charityItems: CharityItem[] = [
  {
    id: 1,
    image: img1,
    title: "سعادة قلب",
    description: "وسائلنا للخدمات التي لن توجد مقابل...",
    target: 1000,
    current: 500,
    progress: 60,
  },
  {
    id: 2,
    image: img2,
    title: "سعادة قلب",
    description: "وسائلنا للخدمات التي لن توجد مقابل...",
    target: 1000,
    current: 500,
    progress: 60,
  },
  {
    id: 3,
    image: img3,
    title: "سعادة قلب",
    description: "وسائلنا للخدمات التي لن توجد مقابل...",
    target: 1000,
    current: 500,
    progress: 60,
  },
  {
    id: 4,
    image: img1,
    title: "سعادة قلب",
    description: "وسائلنا للخدمات التي لن توجد مقابل...",
    target: 1000,
    current: 500,
    progress: 60,
  },
];
