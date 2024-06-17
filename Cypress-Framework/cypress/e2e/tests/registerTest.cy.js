import { registerPage } from '../../pages/registerPage'
import testData from '../../fixtures/testData.json'

const registerObj = new registerPage();

describe('Test Automation', ()=>{
    it('Register flow', ()=>{
        registerObj.openURL();
        registerObj.enterFirstName(testData.registerForm.firstName);
        registerObj.enterLastName(testData.registerForm.lastName);
        registerObj.enterEmail(testData.registerForm.email);
        registerObj.enterTelephone(testData.registerForm.telephone);
        registerObj.enterPassword(testData.registerForm.password);
        registerObj.selectCheckBox();
        registerObj.clickContinue();
    })
})