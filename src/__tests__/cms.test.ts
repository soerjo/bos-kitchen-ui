import { describe, expect, it } from 'vitest';
import { getSiteConfig, getHomePageData, getMenuPageData, getStoryPageData, getContactPageData } from '@/services/cms';

describe('CMS Data Service (Ready for CMS Migration)', () => {
  it('loads site configuration correctly', async () => {
    const site = await getSiteConfig();
    expect(site.brandName).toBe('bo.s_kitchen');
    expect(site.contact.whatsapp).toBeDefined();
    expect(site.hours.length).toBeGreaterThan(0);
  });

  it('loads home page data structure with featured products', async () => {
    const home = await getHomePageData();
    expect(home.hero.title).toContain('Cita Rasa Artisan');
    expect(home.featuredProducts.length).toBeGreaterThanOrEqual(4);
    expect(home.hero.stats.length).toBe(3);
  });

  it('loads menu page with multiple bakery categories', async () => {
    const menu = await getMenuPageData();
    expect(menu.categories.length).toBeGreaterThan(3);
    expect(menu.products.length).toBeGreaterThanOrEqual(6);
    expect(menu.products[0]).toHaveProperty('price');
  });

  it('loads story and contact page data', async () => {
    const [story, contact] = await Promise.all([getStoryPageData(), getContactPageData()]);
    expect(story.milestones.length).toBeGreaterThan(0);
    expect(contact.customCakeThemes.length).toBe(4);
    expect(contact.faqs.length).toBeGreaterThan(0);
  });
});
