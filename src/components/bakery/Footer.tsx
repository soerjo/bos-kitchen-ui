import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Camera, Mail } from 'lucide-react';
import { getSiteConfig } from '@/services/cms';

export async function Footer() {
  const site = await getSiteConfig();

  return (
    <footer className="w-full bg-[#efeeea] text-[#54433a] pt-14 pb-12 border-t border-[#877369]/15">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-sm shrink-0 border border-[#914714]/15">
                <Image src="/images/logo.png" alt="B's Kitchen Logo" fill className="object-cover" sizes="48px" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-[#914714] tracking-tight leading-none block">
                  {site.brandName}
                </span>
                <p className="text-xs uppercase text-[#795745] font-semibold tracking-wider mt-1">{site.tagline}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-[#54433a]">
              Menyajikan kreasi pastry beraroma mentega pilihan, roti sourdough fermentasi alami, dan hidangan penutup
              artisanal dengan sentuhan kehangatan klasik.
            </p>
          </div>

          {/* Column 2: Hours */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-[#1b1c1a]">Jam Operasional</h4>
            <ul className="space-y-2 text-sm">
              {site.hours.map((h, i) => (
                <li key={i} className="flex justify-between items-center">
                  <span>{h.day}:</span>
                  <span className={h.closed ? 'font-medium text-[#ba1a1a]' : 'font-medium text-[#1b1c1a]'}>
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Atelier Address */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-[#1b1c1a]">Boutique & Atelier</h4>
            <div className="text-sm space-y-2">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#914714] shrink-0 mt-0.5" />
                <span>{site.contact.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#914714] shrink-0" />
                <span>{site.contact.whatsappDisplay}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#914714] shrink-0" />
                <span>{site.contact.email}</span>
              </p>
            </div>
          </div>

          {/* Column 4: Social & Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-[#1b1c1a]">Terhubung</h4>
            <p className="text-sm">Ikuti aroma panggangan pagi kami dan rilisan menu musiman teranyar di Instagram.</p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://instagram.com/${site.contact.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#e4e2de] hover:bg-[#914714] hover:text-white transition-colors flex items-center justify-center text-[#54433a]"
                aria-label="Instagram"
              >
                <Camera className="w-4 h-4" />
              </a>
              <a
                href={site.contact.gmapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#e4e2de] hover:bg-[#914714] hover:text-white transition-colors flex items-center justify-center text-[#54433a]"
                aria-label="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${site.contact.email}`}
                className="w-10 h-10 rounded-full bg-[#e4e2de] hover:bg-[#914714] hover:text-white transition-colors flex items-center justify-center text-[#54433a]"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#877369]/15 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#54433a] text-center md:text-left">
          <p>© {new Date().getFullYear()} bo.s_kitchen Artisan Bakery. Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-[#914714] transition-colors">
              Ketentuan Pesanan
            </Link>
            <Link href="/contact" className="hover:text-[#914714] transition-colors">
              FAQ
            </Link>
            <Link href="/story" className="hover:text-[#914714] transition-colors">
              Filosofi Dapur
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
