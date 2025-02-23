'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../../i18n';
import { useParams } from 'next/navigation';

import dynamic from 'next/dynamic';
const CharitySlider = dynamic(() => import('@/app/components/charity-slider'),
  { ssr: false });
const Footer = dynamic(() => import('@/app/components/Footer'),
  { ssr: false });
const Sponsers = dynamic(() => import('@/app/components/Sponsers'),
  { ssr: false });
const HeroSlider = dynamic(() => import('@/app/components/Hero'),
  { ssr: false });
const StatsCard = dynamic(() => import('@/app/components/Hero/Stats'),
  { ssr: false });
const Services = dynamic(() => import('@/app/components/our-services/Services'),
  { ssr: false });

export default function HomePage() {
  const { t } = useTranslation();
  const [isReady, setIsReady] = useState(i18n.isInitialized);
  const { lang } = useParams();

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang as any);
    }
  }, [lang]);

  useEffect(() => {
    if (!i18n.isInitialized) {
      i18n.init().then(() => setIsReady(true));
    }
  }, []);

  if (!isReady) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <HeroSlider />
      <div className="relative flex items-center justify-center ">
        <StatsCard />
      </div>
      <Services />
      <CharitySlider />
      <Sponsers />
      <Footer />
    </div>
  );
}