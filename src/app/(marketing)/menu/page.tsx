import React from 'react';
import type { Metadata } from 'next';
import { getMenuPageData, getSiteConfig } from '@/services/cms';
import { MenuClient } from './MenuClient';

export const metadata: Metadata = {
  title: 'Menu Kue Pilihan | bo.s_kitchen Artisan Bakery',
  description: 'Daftar menu kue freshly baked, artisan chiffon, burnt cheesecake, fudgy brownies, dan viennoiserie.',
};

export default async function MenuPage() {
  const [data, site] = await Promise.all([getMenuPageData(), getSiteConfig()]);

  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-6 pt-6 md:pt-10">
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
        <span className="text-xs font-bold uppercase tracking-widest text-[#914714]">Katalog Lengkap</span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1b1c1a]">{data.title}</h1>
        <p className="text-xs sm:text-sm text-[#54433a] leading-relaxed">{data.subtitle}</p>
      </div>

      <MenuClient initialData={data} site={site} />
    </div>
  );
}
