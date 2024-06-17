// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>

const cypress = require("cypress");

//Created customised command to handle frames and use it multiple times
Cypress.Commands.add('GetIframe', (iframe)=>{
    return cy.get(iframe)
.its('0.contentDocument.body')
.should('be.visible')
.then(cy.wrap); //Here, we are getting the element inside the document
})

/*
//We can also overwrite the existing methods like contains()
cypress.Commands.overwrite('contains', (originalFn, subject, filter, text,options = {})=>{ //Here, contains() take 5 arguments. So we should also pass the same no of args
    if(typeof text === 'object'){
        options = text
        text = filter
        filter = undefined
    }

    options.matchcase=false
    return originalFn(subject, filter, text, options)

})*/

Cypress.Commands.add('LoginApp',(username, password)=>{
    cy.get("input[placeholder='Username']").type(username);
    cy.get("input[placeholder='Password']").type(password);
    cy.get("button[type='submit']").click(); 
})
