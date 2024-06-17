/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>
require('@4tw/cypress-drag-drop')

describe('Mouse operations', ()=>{

    it.skip('Mouse hover', ()=>{
        cy.visit('https://demo.opencart.com/');
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click();
    })

    it('Right click', ()=>{
        cy.visit('https://demo.opencart.com/');
        //Approach 1
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('contextmenu').click();

        //Approach 2
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').rightclick();
    })

    it('Right click', ()=>{
        cy.visit('https://qa-automation-practice.netlify.app/double-click');
        cy.get('#double-click-btn').dblclick();//Approach 1
        cy.get('#double-click-btn').trigger('dblclick');//Approach 2
    })

    it('Drag and drop using plugin', ()=>{
        //npm install --save-dev @4tw/cypress-drag-drop
        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
        cy.get('#box6').drag('#box106',{force:true}); //Here, force is not mandatory.We add it only when there is an error.

        // Alternative way
        // cy.get('.draggable').trigger('dragstart');
        // cy.get('.droppable').trigger('drop');
    })

    it('Scroll the page', ()=>{
        cy.visit('https://www.worldometers.info/geography/how-many-countries-are-there-in-the-world/');
        cy.get("a[href='/world-population/dominica-population/']").scrollIntoView();
        cy.get("a[href='/world-population/dominica-population/']").scrollIntoView({duration:2000});//To scroll slowly
    })

})