/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>

//Before hook
//After hook
//BeforeEach hook - This will execute before each and every IT block
//AfterEach hook - This will execute after each and every IT block

describe('My Test Suite', ()=>{

    before(()=>{
        cy.log('Launch application');
    })

    after(()=>{
        cy.log('close application');
    })

    beforeEach(()=>{
        cy.log('Login to the application');
    })

    afterEach(()=>{
        cy.log('Logout from the application');
    })

    it('Search', ()=>{

    })

    it('Advanced Search', ()=>{
        
    })

    it('List products', ()=>{
        
    })
})