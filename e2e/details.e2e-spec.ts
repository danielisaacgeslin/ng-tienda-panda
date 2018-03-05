import { browser, by, element } from 'protractor';

import { DetailsPage } from './details.po';

describe('ng-tienda-panda Details', () => {
  let detailsPage: DetailsPage;

  beforeEach(async () => {
    browser.waitForAngularEnabled(false);
    detailsPage = new DetailsPage();
    detailsPage.navigateTo();
    await browser.sleep(2000);
  });

  it('should contain a carousel', async () => {
    expect(await detailsPage.getCarousel()).toBeTruthy();
  });

  it('should contain carousel items', async () => {
    expect(await detailsPage.getCarouselItems().count()).toBeGreaterThan(0);
  });

  it('should contain the main title', async () => {
    const title = await detailsPage.getTitle();
    expect(title).toBeTruthy();
    expect(await title.getText()).toBeTruthy();
  });
});
