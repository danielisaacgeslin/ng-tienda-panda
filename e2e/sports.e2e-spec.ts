import { browser, by, element, Key } from 'protractor';

import { scrollToElement } from './helper';
import { SportsPage } from './sports.po';

describe('ng-tienda-panda Sports', () => {
  let sportsPage: SportsPage;

  beforeEach(async () => {
    browser.waitForAngularEnabled(false);
    sportsPage = new SportsPage();
    sportsPage.navigateTo();
    await browser.sleep(3500);
  });

  it('should contain banners', async () => {
    const bannerCount: number = await sportsPage.getBanners().count();
    expect(bannerCount).toBeGreaterThan(0);
  });

  it('should contain articles', async () => {
    const articleCount = await sportsPage.getArticles().count();
    expect(articleCount).toBeGreaterThan(0);
  });

  it('should order articles', async () => {
    const select = sportsPage.getOrderSelect();
    const articleCount: number = await sportsPage.getArticles().count();
    const first: string = await sportsPage.getArticles().get(0).getText();
    const last: string = await sportsPage.getArticles().get(articleCount - 1).getText();
    expect(first).toEqual(await sportsPage.getArticles().get(0).getText());
    select.sendKeys(Key.ARROW_DOWN);
    expect(last).toEqual(await sportsPage.getArticles().get(0).getText());
  });

  it('should navigate to details', async () => {
    const url = await sportsPage.getUrl();
    const btn = sportsPage.getViewMoreBtn();
    await scrollToElement(btn);
    await btn.click();
    expect(url).not.toEqual(await sportsPage.getUrl());
  });
});
