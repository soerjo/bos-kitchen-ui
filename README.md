# bo.s_kitchen UI (Artisan Bakery & Pastry Boutique)

Antarmuka web modern untuk toko kue & bakery artisanal **bo.s_kitchen**, dibangun menggunakan Next.js App Router, Tailwind CSS, komponen animasi interaktif terinspirasi dari React Bits, dan arsitektur data terisolasi yang siap dihubungkan ke CMS service.

## 🍰 Fitur Utama

- **Modern Warm Editorial Design**: Tipografi elegan (*Playfair Display* & *Plus Jakarta Sans*), palet warna hangat (*Warm Caramel* `#914714`, *Deep Cocoa* `#795745`, *Vanilla Cream* `#FBF9F5`), dan tinted ambient shadows.
- **Halaman Lengkap**:
  - `Beranda` (`/`): Hero copy dengan text-reveal, animated count-up statistics, spotlight value proposition cards, kategori visual, signature pastry highlight, founder story, ulasan pelanggan, dan banner pemesanan acara.
  - `Menu Kue` (`/menu`): Filter dinamis kategori produk, price badge resmi, rating, tag spesifikasi, dan tombol pemesanan kilat via WhatsApp.
  - `Kisah Kami` (`/story`): Tiga pilar integritas rasa, milestone perjalanan oven Senopati, dan dokumentasi dapur atelier.
  - `Kontak & Lokasi` (`/contact`): Detail studio Senopati & Google Maps, channel cepat pemesanan, formulir instan pemesanan custom cake dengan generator draft pesan WhatsApp otomatis, serta FAQ.
- **Komponen React Bits Terintegrasi**:
  - `SpotlightCard`: Efek hover sorot cahaya interaktif mengikuti posisi kursor mouse.
  - `CountUp`: Animasi penghitungan angka statistik yang mulus saat masuk viewport.
  - `SplitText`: Efek kemunculan teks per kata dengan blur reveal halus.
  - `ShinyText`: Efek kilau gradasi mengalir pada teks promosi.
- **CMS Ready Architecture**:
  - Semua data konten, teks, produk, konfigurasi jam operasional, dan kontak diatur melalui typed service (`src/services/cms.ts` & `src/types/cms.ts`).
  - Mendukung fallback mock internal otomatis dan siap beralih ke REST CMS API cukup dengan mendefinisikan environment variable `CMS_API_URL`.

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Styling**: Tailwind CSS v4, Lucide React
- **Animations**: Motion, React Bits custom components
- **State & Data**: TanStack Query, Zustand, Zod
- **Testing**: Vitest, React Testing Library
- **Package Manager**: Bun

## 🚀 Menjalankan Proyek

```bash
# Install dependensi
bun install

# Menjalankan server development
bun run dev

# Menjalankan linter & type check
bun run lint
bunx tsc --noEmit

# Menjalankan unit test
bun run test

# Menjalankan build produksi
bun run build
```
