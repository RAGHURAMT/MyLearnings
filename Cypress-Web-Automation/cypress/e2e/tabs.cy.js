/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>

describe('Handle tabs', ()=>{
    it.skip('Handle tabs - approach 1', ()=>{
        cy.visit('https://the-internet.herokuapp.com/windows');
        //Here, we are deleting the attribute from the HTML, so that the window will open in the same tab and NOT in differnt window
        cy.get('.example a').invoke('removeAttr', 'target').click(); //Here, Target is the attribute name
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new');
        //To go back to the parent or previous tab
        cy.go('back');
    })

    it('Handle tabs - approach 2', ()=>{
        cy.visit('https://the-internet.herokuapp.com/windows');
        //Here, we are directly getting the next page url from href tag from the current page and opening the page  directly. This will work only if both the pages has the same domain(the-internet.herokuapp.com).
        cy.get('.example a').then((e)=>{
            let url = e.prop('href'); // Here, we are getting the next page url
            cy.visit(url);
            cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new');
            //To go back to the parent or previous tab
            cy.go('back');
        })
    })
})