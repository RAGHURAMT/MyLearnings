/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>

describe('Reading data from data files', ()=>{

     //This approach is used when we need to test with single data
    let userData;
    before('Reading data', ()=>{
        cy.fixture('orangeHRMLogin').then((data)=>{ //orangeHRMLogin is the name of the file from Fixtures folder
            userData = data; //If only one username and password is provided in the data file
        })
    })
    it('Reading data from Fixtures folder',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
            cy.get("input[placeholder='Username']").type(userData.username);
            cy.get("input[placeholder='Password']").type(userData.password);
            cy.get("button[type='submit']").click();   
            
            //using custom command
            // cy.LoginApp('admin', 'admin123' );
    })

    it.skip('Reading multiple data from Fixtures folder',()=>{
        //This approach is used when we need to test with multiple data
        cy.fixture('orangeHRMlogin2').then((data)=>{
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
            //The below foreach will run the scenario with all of the data
            data.forEach((userData) => {
                cy.get("input[placeholder='Username']").type(userData.username);
                cy.get("input[placeholder='Password']").type(userData.password);
                cy.get("button[type='submit']").click();  

                if(userData.username=='admin' && userData.password=='admin123'){
                    cy.log("login is successful");
                    cy.get(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").click();
                    cy.xpath("//a[normalize-space()='Logout']").click();
                }
                else{
                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text")
                        .should('have.text', userData.expected);
                }
            })
        })   
    })
})