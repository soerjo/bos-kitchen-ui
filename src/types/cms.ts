export interface SiteConfig {
  brandName: string;
  tagline: string;
  foundedYear: string;
  contact: {
    whatsapp: string;
    whatsappDisplay: string;
    instagram: string;
    address: string;
    gmapsUrl: string;
    email: string;
  };
  hours: Array<{
    day: string;
    time: string;
    closed?: boolean;
  }>;
  deliveryAreas: string[];
}

export interface HeroStat {
  target: number;
  suffix: string;
  label: string;
  format: 'locale' | 'integer' | 'decimal';
}

export interface HomeHero {
  badge: string;
  title: string;
  description: string;
  stats: HeroStat[];
  ctaPrimary: { text: string; href: string };
  ctaSecondary: { text: string; href: string };
  heroImage: string;
  floatingHighlight: {
    title: string;
    badge: string;
    image: string;
  };
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface CategorySummary {
  name: string;
  slug: string;
  count: string;
  image: string;
}

export interface ProductItem {
  id: string;
  name: string;
  slug?: string;
  category: string;
  price: number;
  image: string;
  badge?: string;
  rating: number;
  reviewsCount: number;
  tags: string[];
  description: string;
}

export interface FounderStory {
  badge: string;
  quote: string;
  chefName: string;
  chefRole: string;
  image: string;
  sinceBadge: string;
  sinceText: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
}

export interface HomePageData {
  hero: HomeHero;
  features: FeatureItem[];
  categories: CategorySummary[];
  featuredProducts: ProductItem[];
  founderStory: FounderStory;
  testimonials: TestimonialItem[];
}

export interface MenuPageData {
  title: string;
  subtitle: string;
  categories: Array<{ id: string; name: string }>;
  products: ProductItem[];
}

export interface StoryPageData {
  hero: {
    title: string;
    subtitle: string;
    image: string;
  };
  milestones: Array<{ year: string; title: string; desc: string }>;
  values: Array<{ title: string; desc: string }>;
  gallery: string[];
}

export interface ContactPageData {
  hero: {
    title: string;
    subtitle: string;
  };
  studio: {
    name: string;
    address: string;
    phone: string;
    hours: string;
    gmapsUrl: string;
  };
  quickChannels: Array<{
    title: string;
    desc: string;
    href: string;
    icon: string;
    highlight?: boolean;
  }>;
  customCakeThemes: Array<{
    id: string;
    name: string;
    desc: string;
  }>;
  faqs: Array<{ q: string; a: string }>;
}
