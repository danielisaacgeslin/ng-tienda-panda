import { browser, by, element } from 'protractor';

import { scrollToElement, clearInput } from './helper';
import { AdminToolsPage } from './adminTools.po';

describe('ng-tienda-panda Admin Tools', () => {
  let adminToolsPage: AdminToolsPage;

  beforeEach(async () => {
    browser.waitForAngularEnabled(false);
    adminToolsPage = new AdminToolsPage();
    adminToolsPage.navigateTo();
    await browser.sleep(1000);
  });

  it('should try to save', async () => {
    const submitBtn = adminToolsPage.getSubmitBtn();
    await adminToolsPage.getTokenInput().sendKeys('not_a_real_token');
    await scrollToElement(submitBtn);
    await submitBtn.click();
    expect(await submitBtn.getAttribute('disabled')).toBeTruthy();
    await browser.sleep(1000);
    expect(await submitBtn.getAttribute('disabled')).toBeFalsy();
  });

  it('should add a product input', async () => {
    const productInputCount = await adminToolsPage.getProductInputs().count();
    const firstAddBtn = adminToolsPage.getProductAddBtns().get(0);
    await scrollToElement(firstAddBtn);
    await firstAddBtn.click();
    expect(await adminToolsPage.getProductInputs().count()).toBeGreaterThan(productInputCount);
  });

  it('should remove a product input', async () => {
    const productInputCount = await adminToolsPage.getProductInputs().count();
    const firstRemoveBtn = adminToolsPage.getProductRemoveBtns().get(0);
    await scrollToElement(firstRemoveBtn);
    await firstRemoveBtn.click();
    expect(await adminToolsPage.getProductInputs().count()).toBeLessThan(productInputCount);
  });

  it('should fetch a new product description when the product ID changes', async () => {
    const firstProductDescription = await adminToolsPage.getProductDescriptions().get(0).getText();
    const firstProductInput = await adminToolsPage.getProductInputs().get(0);
    await clearInput(firstProductInput);
    await firstProductInput.sendKeys('MLA709034314');
    await browser.sleep(1000);
    const newFirstProductDescription = await adminToolsPage.getProductDescriptions().get(0).getText();
    expect(newFirstProductDescription).toBeTruthy();
    expect(firstProductDescription).not.toEqual(newFirstProductDescription);
  });

});
