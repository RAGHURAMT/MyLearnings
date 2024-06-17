export class homePage{
    weblocators = {
        search_input:'.form-control',
        click_search:'.btn.btn-default',
        product:'img[title="MacBook"]',
        addToCart:'Add to Cart',
        successMessage:'.alert.alert-success.alert-dismissible'
    }

    searchProduct(productName){
        cy.get(this.weblocators.search_input).type(productName);
        cy.get(this.weblocators.click_search).click();
    }

    addToCart(){
        cy.get(this.weblocators.addToCart).click();
    }

    verifySuccessMessage(){
        return cy.get(this.weblocators.successMessage);
    }
}