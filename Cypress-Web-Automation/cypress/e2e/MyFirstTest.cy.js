
describe('My first test', () => {
    it('verify title', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/');
      cy.title().should('eq', 'OrangeHRM');
    });

    it('verify title - Negative', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.title().should('eq', 'Orange');
      });
  });
  
  