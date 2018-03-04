import { browser, by, element } from 'protractor';

import { HeaderPage } from './header.po';

describe('ng-tienda-panda Header', () => {
  let headerPage: HeaderPage;

  beforeEach(async () => {
    browser.waitForAngularEnabled(false);
    headerPage = new HeaderPage();
    headerPage.navigateTo();
    await browser.sleep(3500);
  });

  it('should contain the main logo', async () => {
    expect(await headerPage.getMainLogo()).toBeTruthy();
  });

  it('should contain "sports", "juegos", "hogar" nav items', async () => {
    const navItems = headerPage.getNavItems();
    expect(await navItems.count()).toEqual(3);
    expect((await navItems.get(0).getText()).toLowerCase()).toEqual('sports');
    expect((await navItems.get(1).getText()).toLowerCase()).toEqual('juegos');
    expect((await navItems.get(2).getText()).toLowerCase()).toEqual('hogar');
  });
});
