import { getTitle } from '../support/app.po';

describe('expenses', () => {
  beforeEach(() => cy.visit('/'));

  it('should display Expense Tracker as title', () => {
    getTitle().contains('Expense Tracker');
  });
});
