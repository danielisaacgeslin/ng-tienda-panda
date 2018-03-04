import { browser, by, element } from 'protractor';

export class HeaderPage {
  public navigateTo(url: string = '/') {
    return browser.get(url);
  }

  public getMainLogo() {
    return element(by.id('main-logo'));
  }

  public getNavItems() {
    return element.all(by.css('li.navbar__item'));
  }
}
