import { PizzeriasPuriscalWebsitePage } from './app.po';

describe('pizzerias-puriscal-website App', () => {
  let page: PizzeriasPuriscalWebsitePage;

  beforeEach(() => {
    page = new PizzeriasPuriscalWebsitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
