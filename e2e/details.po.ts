import { browser, by, element } from 'protractor';

export class DetailsPage {
  public navigateTo(url: string = '/sports/detalle/MLA708629603') {
    return browser.get(url);
  }

  public getCarousel() {
    return element(by.css('ngb-carousel'));
  }

  public getCarouselItems() {
    return element.all(by.css('ngb-carousel .carousel-item'));
  }

  public getTitle() {
    return element(by.css('h1.article__main-title'));
  }
}
