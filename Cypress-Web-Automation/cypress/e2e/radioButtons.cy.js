/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>

describe('Radio Buttons', ()=>{
    it('Select radio button', ()=> {
        cy.visit('https://qa-automation-practice.netlify.app/radiobuttons.html');
        cy.get('#radio-button2').check().should('be.checked');
        cy.get('#radio-button3').should('not.be.checked');
    })

    it('Select checkboxes', ()=> {
        cy.visit('https://qa-automation-practice.netlify.app/checkboxes');
        cy.get('#checkbox2').check().should('be.checked');
        cy.get('#checkbox1').check().should('be.checked');
        cy.get('#checkbox3').should('not.be.checked');
        cy.get('#checkbox1').uncheck().should('not.be.checked');

        //Selecting multiple checkboxes
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked');
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked');

        //select first checkbox
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked');
         
            //select last checkbox
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked');
    })
})