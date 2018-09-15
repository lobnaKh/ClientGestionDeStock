import { ClientGestionDeStockPage } from './app.po';

describe('client-gestion-de-stock App', function() {
  let page: ClientGestionDeStockPage;

  beforeEach(() => {
    page = new ClientGestionDeStockPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
