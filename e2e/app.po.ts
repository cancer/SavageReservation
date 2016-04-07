export class SavageReservationPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('savage-reservation-app p')).getText();
  }
}
