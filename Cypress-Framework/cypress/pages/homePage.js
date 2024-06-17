export class homePage{
    weblocators = {
        search_input:'.form-control',
        click_search:'.btn.btn-default',
        product:'img[title="MacBook"]',
        addToCart:`[onclick="cart.add('43', '1');"]`,
        successMessage:'div.alert.alert-success.alert-dismissible'
    }

    searchProduct(productName){
        cy.get(this.weblocators.search_input).type(productName);
        cy.get(this.weblocators.click_search).click();
    }

    addToCart(){
        cy.get(this.weblocators.addToCart).click();
    }

    verifySuccessMessage(){
        cy.wait(2000);
        return cy.get(this.weblocators.successMessage);
    }
}