describe('dropdowns', ()=>{
    it.skip('Select dropdown', ()=> {
        cy.visit('https://qa-automation-practice.netlify.app/dropdowns');
        cy.get('#dropdown-menu').select("Aruba").should('have.value', 'Aruba');
    })

    it.skip('Dropdown with input box', ()=> {
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/');
        cy.get('#select2-billing_country-container').click();
        cy.get('.select2-search__field').type('Italy').type('{enter}');
        cy.get('#select2-billing_country-container').should('have.text', 'Italy');
    })

    it.skip('Autosuggest dropdown', ()=> {
        cy.visit('https://www.wikipedia.org/');
        cy.get('#searchInput').type('Delhi');
        cy.get('.suggestion-title').contains('Delhi University').click();
    })

    it('Dynamic dropdown', ()=> {
        cy.visit('https://www.google.co.uk/');
        cy.get('#L2AGLb > .QS5gu').click(); //Accepting cookies
        cy.get('#APjFqb').type('Automation');
        cy.wait(2000);
        cy.get('div.wM6W7d>span').each(($el, index, $list)=>{
            if($el.text()=='Automation Anywhere'){
                cy.wrap($el).click();
            }
        })
        cy.get('#APjFqb').should('have.value', 'Automation Anywhere');
    })
})