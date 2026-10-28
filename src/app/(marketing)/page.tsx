import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MessageCircle, Star, Sparkles, Award } from 'lucide-react';
import { getHomePageData, getSiteConfig } from '@/services/cms';
import { SpotlightCard } from '@/components/react-bits/SpotlightCard';
import { CountUp } from '@/components/react-bits/CountUp';
import { SplitText } from '@/components/react-bits/SplitText';
import { ShinyText } from '@/components/react-bits/ShinyText';

export default async function HomePage() {
  const [data, site] = await Promise.all([getHomePageData(), getSiteConfig()]);
  const { hero, features, categories, featuredProducts, founderStory, testimonials } = data;

  return (
    <div className="flex flex-col w-full pb-16 md:pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden py-10 md:py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fed1b9]/60 text-[#795845] text-xs font-semibold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#914714] animate-pulse" />
              <span>{hero.badge}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[44px] lg:leading-[54px] text-[#1b1c1a] font-semibold tracking-tight">
              <SplitText
                text={hero.title}
                highlightWords={['Artisan', 'Kehangatan']}
                highlightClassName="font-serif italic text-[#914714]"
              />
            </h1>

            <p className="text-base sm:text-lg text-[#54433a] max-w-xl leading-relaxed">{hero.description}</p>

            {/* React Bits CountUp Stats */}
            <div className="flex items-center gap-6 py-2 border-y border-[#877369]/15 w-full max-w-lg">
              {hero.stats.map((stat, i) => (
                <React.Fragment key={i}>
                  <div className="flex flex-col">
                    <div className="font-serif text-2xl font-bold text-[#914714] flex items-baseline">
                      <CountUp to={stat.target} format={stat.format} suffix={stat.suffix} duration={2.5} />
                    </div>
                    <span className="text-xs text-[#54433a] font-medium">{stat.label}</span>
                  </div>
                  {i < hero.stats.length - 1 && <div className="w-px h-8 bg-[#877369]/20" />}
                </React.Fragment>
              ))}
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto pt-2">
              <Link
                href={hero.ctaPrimary.href}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#914714] text-white px-6 py-3.5 rounded-lg text-sm font-semibold hover:bg-[#b05f2b] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>{hero.ctaPrimary.text}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={hero.ctaSecondary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#efeeea] text-[#1b1c1a] px-6 py-3.5 rounded-lg text-sm font-semibold hover:bg-[#e4e2de] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#914714]" />
                <span>{hero.ctaSecondary.text}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[520px] rounded-2xl overflow-hidden shadow-2xl bg-[#efeeea]">
              <Image
                src={hero.heroImage}
                alt="Pastry Display bo.s_kitchen"
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              {/* Floating Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 text-xs font-semibold text-[#1b1c1a]">
                <Award className="w-4 h-4 text-[#914714]" />
                <span>Normandy AOP Certified</span>
              </div>

              {/* Floating Highlight Card */}
              <div className="absolute bottom-4 left-4 right-4 p-3 sm:p-4 bg-white/95 backdrop-blur-md rounded-xl shadow-xl flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-lg bg-[#efeeea] overflow-hidden shrink-0">
                    <Image
                      src={hero.floatingHighlight.image}
                      alt={hero.floatingHighlight.title}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#914714]">
                      {hero.floatingHighlight.badge}
                    </span>
                    <p className="text-sm font-semibold text-[#1b1c1a]">{hero.floatingHighlight.title}</p>
                  </div>
                </div>
                <Link
                  href="/menu"
                  className="text-xs font-bold text-[#914714] hover:underline flex items-center gap-1 shrink-0"
                >
                  Lihat
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITIONS (React Bits Spotlight Cards) */}
      <section className="w-full bg-[#f5f3ef] py-12 border-y border-[#877369]/10">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feat, i) => (
              <SpotlightCard
                key={i}
                className="flex items-start gap-4 p-5 rounded-xl bg-white border border-[#877369]/10 shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-[#ffdbc9] text-[#914714] flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-[#1b1c1a]">{feat.title}</h3>
                  <p className="text-xs text-[#54433a] leading-relaxed">{feat.description}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CATEGORIES CAROUSEL/GRID */}
      <section className="w-full py-14">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#914714]">
                Kategori Pilihan Atelier
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1b1c1a] mt-1">
                Jelajahi Berdasarkan Rasa
              </h2>
            </div>
            <Link
              href="/menu"
              className="text-xs font-bold text-[#914714] hover:underline inline-flex items-center gap-1"
            >
              Lihat Seluruh Koleksi
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {categories.map((cat, i) => (
              <Link
                key={i}
                href={`/menu?category=${cat.slug}`}
                className="group relative h-48 sm:h-56 rounded-xl overflow-hidden bg-[#efeeea] shadow-sm hover:shadow-md transition-all"
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] uppercase font-semibold text-[#ffdbc9]">{cat.count}</span>
                  <h3 className="font-serif text-base sm:text-lg font-bold">{cat.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS (React Bits Spotlight Cards) */}
      <section className="w-full bg-[#f5f3ef] py-16">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#914714]">Signature Kreasi Kami</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1b1c1a]">
              Paling Dicintai Penikmat Pastry
            </h2>
            <p className="text-xs sm:text-sm text-[#54433a]">
              Dipanggang dengan dedikasi tinggi, rasa otentik yang selalu dirindukan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
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
                    <span className="text-[11px] text-[#54433a]">Harga</span>
                    <span className="text-sm font-bold text-[#914714]">Rp {product.price.toLocaleString('id-ID')}</span>
                  </div>
                  <a
                    href={`https://wa.me/${site.contact.whatsapp}?text=Halo,%20saya%20ingin%20memesan%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-lg bg-[#efeeea] hover:bg-[#914714] hover:text-white text-[#1b1c1a] text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Pesan Cepat</span>
                  </a>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOUNDER STORY TEASER */}
      <section className="w-full py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative w-full h-[400px] sm:h-[480px] rounded-2xl overflow-hidden shadow-xl bg-[#efeeea]">
                <Image
                  src={founderStory.image}
                  alt={founderStory.chefName}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 bg-white p-4 rounded-xl shadow-xl border border-[#877369]/10 max-w-xs">
                <span className="text-xs font-bold uppercase text-[#914714]">{founderStory.sinceBadge}</span>
                <p className="text-xs text-[#54433a] mt-0.5">{founderStory.sinceText}</p>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col space-y-6 lg:pl-6 pt-6 lg:pt-0">
              <span className="text-xs font-bold uppercase tracking-widest text-[#914714]">{founderStory.badge}</span>
              <blockquote className="font-serif text-xl sm:text-2xl text-[#1b1c1a] italic leading-snug">
                “{founderStory.quote}”
              </blockquote>
              <p className="text-sm sm:text-base text-[#54433a] leading-relaxed">
                bo.s_kitchen berawal dari dapur rumah di Senopati dengan satu komitmen sederhana: tidak mengorbankan
                kualitas bahan demi efisiensi. Setiap adonan kami beri waktu mengembang sempurna, menghasilkan tekstur
                dan aroma otentik yang tidak bisa ditiru.
              </p>
              <div className="pt-2 flex items-center justify-between">
                <div>
                  <p className="font-serif text-lg font-bold text-[#1b1c1a]">{founderStory.chefName}</p>
                  <p className="text-xs text-[#54433a]">{founderStory.chefRole}</p>
                </div>
                <Link
                  href="/story"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#914714] hover:underline"
                >
                  <span>Baca Kisah Selengkapnya</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="w-full bg-[#f5f3ef] py-16">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#914714]">Ulasan Pelanggan</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1b1c1a]">Cerita Manis dari Mereka</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testi, i) => (
              <SpotlightCard
                key={i}
                className="p-6 rounded-2xl bg-white border border-[#877369]/10 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-[#914714]">
                    {[...Array(testi.rating)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-[#914714]" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[#54433a] italic leading-relaxed">“{testi.quote}”</p>
                </div>
                <div className="flex items-center gap-3 pt-2 border-t border-[#877369]/10">
                  <div className="w-8 h-8 rounded-full bg-[#ffdbc9] text-[#763300] font-bold text-xs flex items-center justify-center">
                    {testi.avatar}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1b1c1a]">{testi.name}</p>
                    <p className="text-[11px] text-[#54433a]">{testi.role}</p>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CUSTOM CAKE CTA BANNER */}
      <section className="w-full pt-16">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="rounded-3xl bg-[#30312e] text-[#f2f0ed] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="relative z-10 max-w-xl space-y-4">
              <span className="text-xs uppercase font-bold tracking-wider text-[#ffdbc9]">
                Layanan Khusus & Korporasi
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold">
                <ShinyText text="Ingin Konsultasi Pesanan Custom Cake & Hampers?" />
              </h2>
              <p className="text-xs sm:text-sm text-[#e4e2de] leading-relaxed">
                Diskusikan tema warna, kartu ucapan personalisasi kaligrafi, hingga kurasi rasa bersama Pastry Concierge
                bo.s_kitchen. Kami siap melayani pengiriman skala besar.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#914714] text-white px-6 py-3.5 rounded-xl text-sm font-semibold hover:bg-[#b05f2b] transition-all shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Kustomisasi Kue Sekarang</span>
                </Link>
              </div>
            </div>
            <div className="relative w-full lg:w-96 h-64 rounded-2xl overflow-hidden shrink-0 shadow-lg bg-[#54433a]">
              <Image
                src="/images/stitch/stitch_img_1.jpg"
                alt="Custom Cake bo.s_kitchen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 384px"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
