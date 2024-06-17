const {test, expect} = require('@playwright/test');
// import {test, expect} from '@playwright/test' // This is another way of importing

test('locators', async({page})=>{
    await page.goto('https://demoblaze.com/');

    //locating multiple web elements
    await page.waitForSelector('a');
    const allLinks = await page.$$('a'); // .$$ will work as findElements
    for(const link of allLinks){
        const linkText = await link.textContent();
        console.log(linkText);
    }
    await page.click('#login2'); //using css
    // await page.click('id=login2'); //using property locator
    await page.fill('#loginusername', 'raghuram619');
    // await page.type('#loginusername', 'raghuram619'); //Another way of passing the values
    const password = await page.locator('#loginpassword');
    await expect(password).toBeVisible();
})