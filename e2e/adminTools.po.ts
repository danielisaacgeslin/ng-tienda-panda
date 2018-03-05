import { browser, by, element } from 'protractor';

export class AdminToolsPage {
  public navigateTo(url: string = '/adminTools') {
    return browser.get(url);
  }

  public getTokenInput() {
    return element(by.css('input[type="password"]'));
  }

  public getSubmitBtn() {
    return element(by.css('button[type="submit"]'));
  }

  public getProductInputs() {
    return element.all(by.css('.category-input-container .input-group input'));
  }

  public getProductDescriptions() {
    return element.all(by.css('.category-input-container small.truncate'));
  }

  public getProductAddBtns() {
    return element.all(by.css('.category-input-container .input-group .input-group-addon.plus'));
  }

  public getProductRemoveBtns() {
    return element.all(by.css('.category-input-container .input-group .input-group-addon.minus'));
  }
}
