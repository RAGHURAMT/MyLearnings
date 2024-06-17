/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>

describe('Alerts', ()=>{

    it.skip('Alert with OK button', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get("button[onclick='jsAlert()']").click();
        //Alert window is automatically handled by cypress. We need NOT to write a script to click on OK button
        //But if we need to capture something on the alert, we need to trigger the events
        cy.on('window:alert', (t)=>{
            expect(t).to.contains('I am a JS Alert');
        })
        cy.get('#result').should('have.text','You successfully clicked an alert'); // To capture the msg after clicking on the alert
    })

    it.skip('Alert with OK and cancel buttons - JS Confirmation alerts', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get("button[onclick='jsConfirm()']").click();
        //Alert window is automatically handled by cypress. We need NOT to write a script to click on OK button
        //But if we need to capture something on the alert, we need to trigger the events
        cy.on('window:confirm', (t)=>{
            expect(t).to.contains('I am a JS Confirm');
        })
        cy.get('#result').should('have.text','You clicked: Ok');

        //To click on cancel button
        cy.wait(4000);
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on('window:confirm', () => false); // This will click on cancel
        cy.get('#result').should('have.text','You clicked: Cancel');
    })

    it.skip('JS Prompt alert', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.window().then((win)=>{
            cy.stub(win, 'prompt').returns('welcome'); //This will enter welcome text in prompt window. Here, we are first passing the value and then clicking on the button to get the prompt
        })
        cy.get("button[onclick='jsPrompt()']").click();
        // cy.on('window:confirm', () => false); // This will click on cancel
        cy.get('#result').should('have.text','You entered: welcome');
    })

    it('Authenticated alert', ()=>{
        //approach 1
        cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:{username:'admin', password:'admin'}});
        cy.get(".example p").should('have.contain', 'Congratulations');

        //Approach 2
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth');
        cy.get(".example p").should('have.contain', 'Congratulations');
    })
})