import React from 'react';
import type { Metadata } from 'next';
import { getMenuPageData, getSiteConfig } from '@/services/cms';
import { capitalize } from '@/utils';
import { MenuClient } from './MenuClient';

interface MenuPageProps {
  searchParams: Promise<{ category?: string }>;
}

export async function generateMetadata({ searchParams }: MenuPageProps): Promise<Metadata> {
  const [data, site, resolvedParams] = await Promise.all([getMenuPageData(), getSiteConfig(), searchParams]);
  const category = resolvedParams?.category;

  const categoryTitle = category ? `Kue ${capitalize(category)} | ` : '';
  const description = category
    ? `Menu pilihan aneka kue ${category} segar dari ${site.brandName} artisan bakery.`
    : data.subtitle;

  return {
    title: `${categoryTitle}${data.title} | ${site.brandName} Artisan Bakery`,
    description,
    openGraph: {
      title: `${categoryTitle}${data.title} | ${site.brandName}`,
      description,
      type: 'website',
    },
  };
}

export default async function MenuPage({ searchParams }: MenuPageProps) {
  const [data, site, resolvedParams] = await Promise.all([getMenuPageData(), getSiteConfig(), searchParams]);
  const initialCategory = resolvedParams?.category;

  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-6 pt-6 md:pt-10">
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
        <span className="text-xs font-bold uppercase tracking-widest text-[#914714]">Katalog Lengkap</span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1b1c1a]">{data.title}</h1>
        <p className="text-xs sm:text-sm text-[#54433a] leading-relaxed">{data.subtitle}</p>
      </div>

      <MenuClient initialData={data} site={site} initialCategory={initialCategory} />
    </div>
  );
}
