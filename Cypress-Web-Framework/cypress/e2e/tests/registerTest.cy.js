import { registerPage } from "../../pages/registerPage"
import registerData from "../../fixtures/registerData.json"

const registerObj = new registerPage();

describe('Test Automation', ()=>{
    it('Register flow', ()=>{
        registerObj.openURL();
        registerObj.enterFirstName(registerData.firstName);
        registerObj.enterLastName(registerData.lastName);
        registerObj.enterEmail(registerData.email);
        registerObj.enterTelephone(registerData.telephone);
        registerObj.enterPassword(registerData.password);
        registerObj.selectCheckBox();
        registerObj.clickContinue();
    })
})