
export class registerPage{
    weblocators={
        firstName:'#input-firstname',
        lastName:'#input-lastname',  
        email:'#input-email',
        telephone:'#input-telephone',
        password:'#input-password',
        confirmPwd:'#input-confirm',
        policyCheckBox:'input[type="checkbox"]',
        btncontinue:'.btn.btn-primary'
    }

    openURL(){
        cy.visit(Cypress.env('URL'));
    }

    enterFirstName(FName){
        cy.get(this.weblocators.firstName).type(FName);
    }

    enterLastName(LName){
        cy.get(this.weblocators.lastName).type(LName);
    }

    enterEmail(mail){
        cy.get(this.weblocators.email).type(mail);
    }

    enterTelephone(phone){
        cy.get(this.weblocators.telephone).type(phone);
    }

    enterPassword(pwd){
        cy.get(this.weblocators.password).type(pwd);
        cy.get(this.weblocators.confirmPwd).type(pwd);
    }

    selectCheckBox(){
        cy.get(this.weblocators.policyCheckBox).check();
    }

    clickContinue(){
        cy.get(this.weblocators.btncontinue).click();
    }
}