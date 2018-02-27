import { AppPage } from './app.po';

describe('ng-tienda-panda App', () => {
  let appPage: AppPage;

  beforeEach(() => {
    appPage = new AppPage();
    appPage.navigateTo();
  });

  it('should contain the main logo', () => {
    expect(appPage.getMainLogo()).toBeTruthy();
  });
});
