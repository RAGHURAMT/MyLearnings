const {test, expect} = require('@playwright/test');

test('soft assertions', async({page})=> {
    await page.goto('https://www.demoblaze.com/index.html');

    //Hard assertions - It will terminate the test and it will not execute the remaining steps
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
    await expect(page).toHaveTitle('STORE');

    //Soft assertions -  It will also fail the test but it will execute all the steps
    await expect.soft(page).toHaveURL('https://www.demoblaze.com/index.html');
    await expect.soft(page).toHaveTitle('STORE');
})