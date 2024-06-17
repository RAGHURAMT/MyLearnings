describe('Capture screenshots and videos', ()=>{
    
    it('Capture screenshots', ()=>{
        cy.visit('https://demo.opencart.com/');
        cy.screenshot("homepage"); // This will capture the screenshot. Here, Homepage is the name of the screeshot
        cy.get("img[title='Your Store']").screenshot("logo"); //This will capture the element screenshot
    })

    it('Capture screenshots and videos on failure', ()=>{
        //cypress will capture the screenshots and videos automatically while running from terminal
        cy.visit('https://demo.opencart.com/');
        cy.get("li:nth-child(7) a:nth-child(1)").click();
        cy.get("div[id='content'] h2").should('have.text', 'tablets'); //Failing the test intentionally
    })
})