/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>

describe('Handling frames', ()=>{

    it.skip('approach 1', ()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe'); //Editing is blocked on this website, Hence tests will fail
        const iframe = cy.get('#mce_0_ifr')
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap); //Here, we are getting the element inside the document

        iframe.clear().type('Welcome {cmd+a}'); //This will enter text and select all the text. On windows we should use ctrl+a to select all the text.
        cy.get("[aria-label='Bold]").click(); //This will click on the bold button
    })

    it.skip('approach 2 - By using custom command created in commands.js', ()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe'); //Editing is blocked on this website, Hence tests will fail
        cy.getIframe('#mce_0_ifr').clear().type('Welcome {cmd+a}'); //Calling the custom command 'getIframe'
        cy.get("[aria-label='Bold]").click(); //This will click on the bold button
    })

    it.skip('approach 3 - By using cypress iframe plugin', ()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe'); //Editing is blocked on this website, Hence tests will fail
        cy.frameLoaded('#mce_0_ifr'); // This will load the frame
        cy.iframe('#mce_0_ifr').clear().type('Welcome {cmd+a}');
    })
})