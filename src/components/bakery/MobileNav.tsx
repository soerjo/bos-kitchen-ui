'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, UtensilsCrossed, BookOpen, MapPin } from 'lucide-react';

const MOBILE_ITEMS = [
  { name: 'Beranda', href: '/', icon: Home },
  { name: 'Menu Kue', href: '/menu', icon: UtensilsCrossed },
  { name: 'Kisah Kami', href: '/story', icon: BookOpen },
  { name: 'Kontak', href: '/contact', icon: MapPin },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#fbf9f5]/95 backdrop-blur-lg border-t border-[#877369]/15 px-4 py-2 flex items-center justify-around shadow-[0_-2px_10px_rgba(61,35,20,0.05)]">
      {MOBILE_ITEMS.map((item) => {
        const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center gap-1 py-1 px-3 rounded-lg transition-colors ${
              isActive ? 'text-[#914714] font-bold' : 'text-[#795745] hover:text-[#914714]'
            }`}
          >
            <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-[1.75]'}`} />
            <span className="text-[11px]">{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
