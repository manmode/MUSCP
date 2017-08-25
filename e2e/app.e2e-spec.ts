import { MUSCPPage } from './app.po';

describe('muscp App', function() {
  let page: MUSCPPage;

  beforeEach(() => {
    page = new MUSCPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
