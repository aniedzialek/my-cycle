import { MyCyclePage } from './app.po';

describe('my-cycle App', () => {
  let page: MyCyclePage;

  beforeEach(() => {
    page = new MyCyclePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
