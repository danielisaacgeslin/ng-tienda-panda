import { browser, by, element } from 'protractor';

export class AppPage {
  public navigateTo(url: string = '/') {
    return browser.get(url);
  }

  public getMainLogo() {
    return element(by.id('main-logo'));
  }
}
