import { browser, by, element } from 'protractor';

export class SportsPage {
  public navigateTo(url: string = '/sports') {
    return browser.get(url);
  }

  public getUrl() {
    return browser.getCurrentUrl();
  }

  public getBanners() {
    return element.all(by.css('.carousel-item .slide'));
  }

  public getArticles() {
    return element.all(by.css('tp-article'));
  }

  public getOrderSelect() {
    return element(by.css('select.block__select'));
  }

  public getViewMoreBtn() {
    return element(by.css('tp-article button.tp-btn'));
  }
}
