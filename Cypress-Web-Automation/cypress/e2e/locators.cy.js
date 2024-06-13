describe("Login to the application", () => {
    it.skip('Verify user is able to login', async()=>{
        await cy.visit('https://opensource-demo.orangehrmlive.com/');
        await cy.wait(4000);
        await cy.get('input[placeholder="Username"]').type("Admin"); //For CSS, we use cy.get
        await cy.get('input[placeholder="Password"]').type("admin123");
        await cy.get('button[type="submit"]').click();
        await cy.xpath('//h6[normalize-space()="Dashboard"]').contains('Dashboard'); //For xpath, we need to use cy.xpath
    })
})