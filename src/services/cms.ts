import mockCms from '@/data/cms/mock-cms.json';
import type { SiteConfig, HomePageData, MenuPageData, StoryPageData, ContactPageData } from '@/types/cms';

const CMS_API_URL = process.env.CMS_API_URL || process.env.NEXT_PUBLIC_CMS_API_URL;

async function fetchFromCms<T>(endpoint: string, fallback: T): Promise<T> {
  if (!CMS_API_URL) {
    return fallback;
  }

  try {
    const res = await fetch(`${CMS_API_URL}${endpoint}`, {
      next: { revalidate: 60 },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      return fallback;
    }

    const data = await res.json();
    return (data.data ?? data) as T;
  } catch {
    return fallback;
  }
}

export async function getSiteConfig(): Promise<SiteConfig> {
  return fetchFromCms<SiteConfig>('/api/cms/site', mockCms.site as SiteConfig);
}

export async function getHomePageData(): Promise<HomePageData> {
  return fetchFromCms<HomePageData>('/api/cms/pages/home', mockCms.home as HomePageData);
}

export async function getMenuPageData(): Promise<MenuPageData> {
  return fetchFromCms<MenuPageData>('/api/cms/pages/menu', mockCms.menu as MenuPageData);
}

export async function getStoryPageData(): Promise<StoryPageData> {
  return fetchFromCms<StoryPageData>('/api/cms/pages/story', mockCms.story as StoryPageData);
}

export async function getContactPageData(): Promise<ContactPageData> {
  return fetchFromCms<ContactPageData>('/api/cms/pages/contact', mockCms.contact as ContactPageData);
}
