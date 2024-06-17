import { homePage } from '../../pages/homepage';
import testData from '../../fixtures/testData.json'

const hp = new homePage();

describe('Add to cart suite', ()=>{
    before(()=>{
        cy.login(testData.login.username, testData.login.password);
    })

    it('Adding laptop to the cart', ()=>{
        hp.searchProduct(testData.product.productName);
        hp.addToCart();
        hp.verifySuccessMessage().should('contain', testData.message.successMessage);
    })
})