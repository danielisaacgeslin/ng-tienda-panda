import { browser, ElementFinder, Key } from 'protractor';

export async function scrollToElement(element: ElementFinder): Promise<void> {
  const { x, y } = await element.getLocation();
  browser.executeScript((_x, _y) => window.scrollTo(_x, _y), x, y);
  await browser.sleep(1000);
}

export async function clearInput(element: ElementFinder): Promise<void> {
  const text = await element.getAttribute('value');
  const countArray = Array.from(Array(text.length).keys());
  return (<any>Promise).all(countArray.map(() => element.sendKeys(Key.BACK_SPACE)));
}
