import { browser, ElementFinder } from 'protractor';

export async function scrollToElement(element: ElementFinder): Promise<void> {
  const { x, y } = await element.getLocation();
  browser.executeScript((_x, _y) => window.scrollTo(_x, _y), x, y);
  await browser.sleep(1000);
}
