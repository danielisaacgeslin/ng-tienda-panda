import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(url: string) {
    return browser.get(url);
  }

  getMainLogoAlt() {
    return element(by.id('tst-main-logo')).getAttribute('alt');
  }
}
