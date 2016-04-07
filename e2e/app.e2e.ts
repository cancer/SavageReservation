import { SavageReservationPage } from './app.po';

describe('savage-reservation App', function() {
  let page: SavageReservationPage;

  beforeEach(() => {
    page = new SavageReservationPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('savage-reservation Works!');
  });
});
