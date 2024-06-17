import Login from "../pageObjects/loginPageObject.cy";

describe('Login using POM', ()=>{

    const lgn = new Login();
    it('Login',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.fixture('orangeHRMLogin').then((data=>{
            lgn.setUserName(data.username);
            lgn.setPassword(data.password);
            lgn.btnSubmit();
        }))
        
    })
})