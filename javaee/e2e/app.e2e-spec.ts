import { JavaeePage } from './app.po';

describe('javaee App', () => {
  let page: JavaeePage;

  beforeEach(() => {
    page = new JavaeePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
