import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {SavageReservationApp} from '../app/savage-reservation';

beforeEachProviders(() => [SavageReservationApp]);

describe('App: SavageReservation', () => {
  it('should have the `defaultMeaning` as 42', inject([SavageReservationApp], (app: SavageReservationApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([SavageReservationApp], (app: SavageReservationApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

