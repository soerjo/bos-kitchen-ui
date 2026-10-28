'use client';

import React, { useState } from 'react';
import { MessageCircle, MapPin, Calendar, Clock, Send, Sparkles } from 'lucide-react';
import type { ContactPageData, SiteConfig } from '@/types/cms';
import { SpotlightCard } from '@/components/react-bits/SpotlightCard';

interface ContactClientProps {
  contact: ContactPageData;
  site: SiteConfig;
}

export function ContactClient({ contact, site }: ContactClientProps) {
  const [selectedTheme, setSelectedTheme] = useState(contact.customCakeThemes[0]?.id ?? '');
  const [eventDate, setEventDate] = useState('');
  const [greetingText, setGreetingText] = useState('');
  const [notes, setNotes] = useState('');

  const handleSendDraft = (e: React.FormEvent) => {
    e.preventDefault();
    const chosenTheme = contact.customCakeThemes.find((t) => t.id === selectedTheme)?.name || 'Custom';
    const message = `Halo bo.s_kitchen,%0A%0ASaya ingin memesan Custom Cake:%0A- Tema: ${encodeURIComponent(chosenTheme)}%0A- Tanggal Acara: ${encodeURIComponent(eventDate || 'Belum ditentukan')}%0A- Pesan Kartu Ucapan: ${encodeURIComponent(greetingText || '-')}%0A- Catatan Tambahan: ${encodeURIComponent(notes || '-')}%0A%0AMohon info ketersediaan slot dan estimasi harga. Terima kasih!`;
    window.open(`https://wa.me/${site.contact.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="space-y-16">
      {/* 1. Quick Channels & Studio Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Studio Info Card */}
        <div className="lg:col-span-6 space-y-6">
          <SpotlightCard className="p-6 sm:p-8 rounded-2xl bg-white border border-[#877369]/10 shadow-sm space-y-4">
            <span className="text-xs uppercase font-bold text-[#914714]">Main Studio</span>
            <h2 className="font-serif text-2xl font-bold text-[#1b1c1a]">{contact.studio.name}</h2>
            <div className="space-y-2 text-sm text-[#54433a]">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#914714] shrink-0 mt-0.5" />
                <span>{contact.studio.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#914714] shrink-0" />
                <span>{contact.studio.hours}</span>
              </p>
            </div>
            <div className="pt-2">
              <a
                href={contact.studio.gmapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#efeeea] hover:bg-[#e4e2de] text-xs font-bold text-[#1b1c1a] transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#914714]" />
                <span>Petunjuk Arah Google Maps</span>
              </a>
            </div>
          </SpotlightCard>

          {/* Quick Channels */}
          <div className="space-y-3">
            {contact.quickChannels.map((ch, i) => (
              <a
                key={i}
                href={ch.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
                  ch.highlight
                    ? 'bg-[#914714] text-white border-transparent hover:bg-[#b05f2b] shadow-md'
                    : 'bg-white text-[#1b1c1a] border-[#877369]/10 hover:border-[#914714]/40 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      ch.highlight ? 'bg-white/20' : 'bg-[#ffdbc9] text-[#914714]'
                    }`}
                  >
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold">{ch.title}</h3>
                    <p className={`text-xs ${ch.highlight ? 'text-white/80' : 'text-[#54433a]'}`}>{ch.desc}</p>
                  </div>
                </div>
                <Send className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Interactive Custom Cake Draft Form */}
        <div className="lg:col-span-6">
          <SpotlightCard className="p-6 sm:p-8 rounded-2xl bg-white border border-[#877369]/10 shadow-sm space-y-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#fed1b9]/60 text-[#795845] text-[10px] font-bold">
                <Sparkles className="w-3 h-3 text-[#914714]" />
                <span>Formulir Instan</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#1b1c1a]">Panduan Custom Cake & Order</h2>
              <p className="text-xs text-[#54433a]">
                Susun konsep kue impian Anda, kami buatkan draft pesanan otomatis ke WhatsApp Pastry Specialist.
              </p>
            </div>

            <form onSubmit={handleSendDraft} className="space-y-4">
              {/* Date Input */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#1b1c1a] flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#914714]" />
                  <span>Tanggal Acara (Disarankan H-3)</span>
                </label>
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#efeeea] border border-[#877369]/15 text-xs text-[#1b1c1a] focus:outline-none focus:ring-1 focus:ring-[#914714]"
                />
              </div>

              {/* Theme Selector */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#1b1c1a]">Pilih Tema / Dekorasi</label>
                <div className="grid grid-cols-2 gap-2">
                  {contact.customCakeThemes.map((th) => {
                    const isSelected = selectedTheme === th.id;
                    return (
                      <button
                        type="button"
                        key={th.id}
                        onClick={() => setSelectedTheme(th.id)}
                        className={`p-3 text-left rounded-xl border text-xs transition-all ${
                          isSelected
                            ? 'border-[#914714] bg-[#ffdbc9]/30 text-[#914714] font-bold shadow-sm'
                            : 'border-[#877369]/15 bg-[#fbf9f5] text-[#54433a] hover:border-[#877369]/40'
                        }`}
                      >
                        <p className="font-semibold text-xs">{th.name}</p>
                        <p className="text-[10px] text-[#795745] mt-0.5 line-clamp-1">{th.desc}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Greeting Card Text */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#1b1c1a]">Tulisan di Atas Kue / Kartu Ucapan</label>
                <input
                  type="text"
                  placeholder="Contoh: Happy Birthday Mama Tercinta"
                  value={greetingText}
                  onChange={(e) => setGreetingText(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#efeeea] border border-[#877369]/15 text-xs text-[#1b1c1a] focus:outline-none focus:ring-1 focus:ring-[#914714]"
                />
              </div>

              {/* Extra Notes */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#1b1c1a]">Catatan Alergi / Permintaan Khusus</label>
                <textarea
                  rows={2}
                  placeholder="Contoh: Kurangi manis, tanpa kacang/almond, dll."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#efeeea] border border-[#877369]/15 text-xs text-[#1b1c1a] focus:outline-none focus:ring-1 focus:ring-[#914714]"
                />
              </div>

              {/* Complimentary notice */}
              <div className="p-3 rounded-lg bg-[#fed1b9]/40 border border-[#b05f2b]/20 text-[11px] text-[#795845] leading-relaxed">
                ✨ Setiap custom cake sudah termasuk 1 lilin elegan, pisau kue higienis, dan kartu ucapan kaligrafi
                buatan tangan.
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#914714] hover:bg-[#b05f2b] text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Kirim Draft Pesanan via WhatsApp</span>
              </button>
            </form>
          </SpotlightCard>
        </div>
      </div>

      {/* 2. FAQ Accordions */}
      <div className="space-y-6 max-w-3xl mx-auto pt-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#914714]">Pertanyaan Umum</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1b1c1a]">Hal yang Sering Ditanyakan</h2>
        </div>

        <div className="space-y-3">
          {contact.faqs.map((faq, i) => (
            <div key={i} className="p-5 rounded-xl bg-white border border-[#877369]/15 shadow-sm space-y-1.5">
              <h3 className="font-serif text-sm sm:text-base font-bold text-[#1b1c1a]">{faq.q}</h3>
              <p className="text-xs sm:text-sm text-[#54433a] leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
