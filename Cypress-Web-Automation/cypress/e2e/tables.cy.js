/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>

describe('Handling tables', ()=>{
    
    //BeforeEach will execute before every IT block
    beforeEach('Login',()=>{
        cy.visit('https://demo.opencart.com/admin/index.php');
        cy.get('#input-username').type('demo');
        cy.get('#input-password').type('demo');
        cy.get("button[type='submit']").click();
        cy.wait(5000);
        cy.get(".btn-close").click();
        cy.get('#menu-customer>a').click();
        cy.get('#menu-customer>ul>li:first-child').click();
    })

    it.skip('Check no of rows and columns',()=>{
        cy.get('.table>tbody>tr').should('have.length', '10'); // Total rows
        cy.get('.table>thead>tr>td').should('have.length', '7'); //Total columns
    })

    it.skip('Check specific cell data',()=>{
        cy.wait(2000);
        cy.xpath("//td[normalize-space()='ouri@gmail.com']")
            .contains('ouri@gmail.com');
    })

    it('Read all the data from rows and columns in first page',()=>{
        cy.get('.table>tbody>tr')
            .each(($row, index, $rows)=>{
                cy.wrap($row).within(()=>{
                    cy.get('td').each(($column, index, $columns)=>{
                        cy.log($column.text());  
                    })
                })
            })
    })
})


