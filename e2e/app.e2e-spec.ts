import { AppPage } from './app.po';

describe('ng-tienda-panda App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should contain alt on the main logo', next => {
    page.navigateTo('/');
    expect(page.getMainLogoAlt()).toEqual('tienda panda');
    next();
  });
});
