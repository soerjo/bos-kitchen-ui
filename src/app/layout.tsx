import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import { Providers } from '@/providers';
import { Header } from '@/components/bakery/Header';
import { Footer } from '@/components/bakery/Footer';
import { MobileNav } from '@/components/bakery/MobileNav';

import './globals.css';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'bo.s_kitchen | Artisan Bakery & Homemade Cakes',
  description:
    'Butik pastry artisan modern menyajikan aneka Chiffon lembut sutra, Burnt Cheesecake autentik, Brownies Callebaut, dan Viennoiserie segar dengan 100% French AOP Normandy Butter.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased text-[#1b1c1a] bg-[#fbf9f5] flex flex-col min-h-screen selection:bg-[#ffdbc9] selection:text-[#331200]">
        <Providers>
          <Header />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
          <MobileNav />
        </Providers>
      </body>
    </html>
  );
}
