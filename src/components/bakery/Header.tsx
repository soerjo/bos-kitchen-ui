'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ShoppingBag, MessageCircle } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Beranda', href: '/' },
  { name: 'Menu Kue', href: '/menu' },
  { name: 'Kisah Kami', href: '/story' },
  { name: 'Kontak & Lokasi', href: '/contact' },
];

export function Header() {
  const pathname = usePathname();
  const [cartCount] = useState(0);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#fbf9f5]/90 backdrop-blur-xl border-b border-[#795745]/10 shadow-[0_1px_8px_rgba(61,35,20,0.04)]">
      <div className="h-20 max-w-[1280px] mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-sm shrink-0 border border-[#914714]/15 group-hover:scale-105 transition-transform duration-300">
            <Image src="/images/logo.png" alt="B's Kitchen Logo" fill priority className="object-cover" sizes="48px" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold text-[#914714] tracking-tight group-hover:text-[#b05f2b] transition-colors leading-none">
              bo.s_kitchen
            </span>
            <span className="text-[10px] tracking-widest uppercase font-semibold text-[#795745] mt-1">
              Artisan Bakery
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = link.href === '/' ? pathname === '/' : pathname?.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors ${
                  isActive
                    ? 'text-[#914714] font-bold border-b-2 border-[#914714] pb-1'
                    : 'text-[#54433a] hover:text-[#914714]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Quick WhatsApp Order */}
          <a
            href="https://wa.me/6289623866341?text=Halo%20bo.s_kitchen,%20saya%20ingin%20memesan%20kue%20hari%20ini"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#914714] hover:bg-[#b05f2b] text-white px-4 py-2 rounded-lg text-xs font-semibold shadow-sm transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Order</span>
          </a>

          {/* Cart Trigger */}
          <Link
            href="/menu"
            className="relative p-2 text-[#54433a] hover:text-[#914714] transition-colors rounded-full hover:bg-[#efeeea]"
            aria-label="Keranjang Belanja"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-[#ba1a1a] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
