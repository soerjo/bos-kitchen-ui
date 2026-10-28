import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { getStoryPageData, getSiteConfig } from '@/services/cms';
import { SpotlightCard } from '@/components/react-bits/SpotlightCard';

export async function generateMetadata(): Promise<Metadata> {
  const [story, site] = await Promise.all([getStoryPageData(), getSiteConfig()]);

  return {
    title: `${story.hero.title} | ${site.brandName} Artisan Bakery`,
    description: story.hero.subtitle,
    openGraph: {
      title: `${story.hero.title} | ${site.brandName}`,
      description: story.hero.subtitle,
      type: 'website',
    },
  };
}

export default async function StoryPage() {
  const story = await getStoryPageData();

  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-6 pt-6 md:pt-10 pb-20 space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#914714]">Filosofi Dapur Kami</span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1b1c1a] leading-tight">
            {story.hero.title}
          </h1>
          <p className="text-sm sm:text-base text-[#54433a] leading-relaxed">{story.hero.subtitle}</p>
        </div>
        <div className="lg:col-span-6">
          <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden shadow-xl bg-[#efeeea]">
            <Image
              src={story.hero.image}
              alt="Dapur bo.s_kitchen"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#914714]">Prinsip Fundamental</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1b1c1a]">Tiga Komitmen Tak Tergoyahkan</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {story.values.map((val, i) => (
            <SpotlightCard key={i} className="p-6 rounded-2xl bg-white border border-[#877369]/10 shadow-sm space-y-3">
              <span className="font-serif text-3xl font-bold text-[#ffdbc9]">0{i + 1}</span>
              <h3 className="font-serif text-lg font-bold text-[#1b1c1a]">{val.title}</h3>
              <p className="text-xs sm:text-sm text-[#54433a] leading-relaxed">{val.desc}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#914714]">Perjalanan Kami</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1b1c1a]">Jejak Langkah Oven Senopati</h2>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {story.milestones.map((ms, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-start gap-4 p-6 rounded-2xl bg-[#f5f3ef] border border-[#877369]/10"
            >
              <div className="px-3 py-1.5 rounded-lg bg-[#914714] text-white font-serif font-bold text-sm shrink-0 self-start">
                {ms.year}
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#1b1c1a]">{ms.title}</h3>
                <p className="text-xs sm:text-sm text-[#54433a] leading-relaxed">{ms.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#914714]">Suasana Studio</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1b1c1a]">Intim, Hangat, & Penuh Dedikasi</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {story.gallery.map((img, i) => (
            <div key={i} className="relative h-48 sm:h-64 rounded-xl overflow-hidden shadow-sm bg-[#efeeea] group">
              <Image
                src={img}
                alt={`Studio Gallery ${i + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
