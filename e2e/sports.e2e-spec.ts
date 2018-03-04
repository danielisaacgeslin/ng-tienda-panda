import { browser, by, element } from 'protractor';

import { SportsPage } from './sports.po';

describe('ng-tienda-panda Sports', () => {
  let sportsPage: SportsPage;

  beforeEach(() => {
    sportsPage = new SportsPage();
    sportsPage.navigateTo();
  });

  it('should contain banners', async () => {
    await browser.sleep(2500);
    const bannerCount: number = await sportsPage.getBanners().count();
    expect(bannerCount).toBeGreaterThan(0);
  });

  it('should contain articles', async () => {
    await browser.sleep(2500);
    const articleCount = await sportsPage.getArticles().count();
    expect(articleCount).toBeGreaterThan(0);
  });
});
