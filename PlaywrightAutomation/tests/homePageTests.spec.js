const {test, expect} = require('@playwright/test');

//SDET-QA

test('Home Page', async ({page})=>{ //page will have all the methods
    await page.goto('https://www.demoblaze.com/index.html');
    let url = await page.url();
    console.log('url is: ', url);

    let title = await page.title();
    console.log('Title is: ', title);

    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');

    await expect(page).toHaveTitle('STORE');

    await page.close();
})
