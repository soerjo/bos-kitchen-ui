'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Star, MessageCircle } from 'lucide-react';
import type { MenuPageData, SiteConfig } from '@/types/cms';
import { SpotlightCard } from '@/components/react-bits/SpotlightCard';

interface MenuClientProps {
  initialData: MenuPageData;
  site: SiteConfig;
}

export function MenuClient({ initialData, site }: MenuClientProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts =
    selectedCategory === 'all'
      ? initialData.products
      : initialData.products.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full pb-20">
      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar mb-8">
        {initialData.categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all shadow-sm ${
                isActive ? 'bg-[#30312e] text-[#f2f0ed] shadow-md' : 'bg-[#efeeea] text-[#54433a] hover:bg-[#e4e2de]'
              }`}
            >
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <SpotlightCard
            key={product.id}
            className="group flex flex-col justify-between rounded-2xl bg-white border border-[#877369]/10 shadow-sm hover:shadow-md transition-all overflow-hidden"
          >
            <div>
              <div className="relative w-full aspect-square overflow-hidden bg-[#efeeea]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-[#914714] text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    {product.badge}
                  </span>
                )}
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded flex items-center gap-1 text-[11px] font-semibold text-[#1b1c1a] shadow-sm">
                  <Star className="w-3 h-3 text-[#914714] fill-[#914714]" />
                  <span>{product.rating}</span>
                  <span className="text-[#54433a] font-normal">({product.reviewsCount})</span>
                </div>
              </div>

              <div className="p-4 space-y-2">
                <div className="flex flex-wrap gap-1.5">
                  {product.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-[#efeeea] text-[#54433a] text-[10px] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-serif text-base font-bold text-[#1b1c1a] group-hover:text-[#914714] transition-colors line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-xs text-[#54433a] line-clamp-2 leading-relaxed">{product.description}</p>
              </div>
            </div>

            <div className="p-4 pt-0 space-y-3">
              <div className="flex items-baseline justify-between border-t border-[#877369]/10 pt-2">
                <span className="text-[11px] text-[#54433a]">Harga Resmi</span>
                <span className="text-sm font-bold text-[#914714]">Rp {product.price.toLocaleString('id-ID')}</span>
              </div>
              <a
                href={`https://wa.me/${site.contact.whatsapp}?text=Halo%20bo.s_kitchen,%20saya%20ingin%20memesan%20${encodeURIComponent(product.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-lg bg-[#efeeea] hover:bg-[#914714] hover:text-white text-[#1b1c1a] text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Pesan via WhatsApp</span>
              </a>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
}
