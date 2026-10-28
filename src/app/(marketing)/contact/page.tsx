import React from 'react';
import type { Metadata } from 'next';
import { getContactPageData, getSiteConfig } from '@/services/cms';
import { ContactClient } from './ContactClient';

export async function generateMetadata(): Promise<Metadata> {
  const [contact, site] = await Promise.all([getContactPageData(), getSiteConfig()]);

  return {
    title: `${contact.hero.title} | ${site.brandName} Artisan Bakery`,
    description: contact.hero.subtitle,
    openGraph: {
      title: `${contact.hero.title} | ${site.brandName}`,
      description: contact.hero.subtitle,
      type: 'website',
    },
  };
}

export default async function ContactPage() {
  const [contact, site] = await Promise.all([getContactPageData(), getSiteConfig()]);

  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-6 pt-6 md:pt-10 pb-20">
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
        <span className="text-xs font-bold uppercase tracking-widest text-[#914714]">Hubungi Kami</span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1b1c1a]">{contact.hero.title}</h1>
        <p className="text-xs sm:text-sm text-[#54433a] leading-relaxed">{contact.hero.subtitle}</p>
      </div>

      <ContactClient contact={contact} site={site} />
    </div>
  );
}
