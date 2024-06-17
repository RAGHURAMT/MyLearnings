describe('Assertions', () => {

    it('Implicit assertions', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/');
      cy.url().should('include', 'orangehrmlive.com');
      cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.url().should('contain', 'orangehrmlive');

      //using and
      cy.url().should('include', 'orangehrmlive.com')
      .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      .and('contain', 'orangehrmlive')
      .and('not.contain', 'greenhrm');

      cy.title().should('include', 'Orange')
      .and('eq', 'OrangeHRM')
      .and('contain', 'HRM')

      cy.get('.orangehrm-login-branding > img').should('be.visible');
      cy.get('.orangehrm-login-branding > img').should('exist');

      cy.xpath("//a").should('have.length', '5'); //This will validate total no of links are 5

      cy.get("input[placeholder='Username']").type('Admin');
      cy.get("input[placeholder='Username']").should('have.value', 'Admin');
      cy.get("input[placeholder='Password']").type('admin123');
      cy.xpath("//button[normalize-space()='Login']").click();
      cy.xpath("//h6[normalize-space()='Dashboard']").should('exist');
    });

    it('Explicit assertions', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.get("input[placeholder='Username']").type('Admin');
        cy.get("input[placeholder='Password']").type('admin123'); 
        cy.xpath("//button[normalize-space()='Login']").click();
        cy.xpath("//h6[normalize-space()='Dashboard']").should('exist');

        
        let expName = 'Dashboard';
        cy.xpath("//h6[normalize-space()='Dashboard']").then((x)=> {
            let actualName = x.text();
            //TDD style
            assert.equal(actualName,expName);
            assert.notEqual(actualName,'Das');

             //BDD style
            expect(actualName).to.equal(expName);
            expect(actualName).to.not.equal('Das')
        })
    })
  });