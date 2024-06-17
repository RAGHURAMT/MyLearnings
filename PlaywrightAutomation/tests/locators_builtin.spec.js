const {test, expect} = require('@playwright/test');

test('Built-In locators', async({page}) =>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.waitForSelector('button[type="submit"]'); 
    const ele = await page.getByAltText('company-branding'); //Here, company-branding is the parameter from page html
    expect(ele).toBeVisible();

    const userName = await page.getByPlaceholder('Username'); //Here,Username is the placeholder parameter from page html
    await expect(userName).toBeVisible();
    await userName.fill("Admin");

    await page.getByPlaceholder('Password').fill("admin123");

    await page.getByRole('button', {type: 'submit'}).click();

    const name = await page.locator('//p[@class="oxd-userdropdown-name"]').textContent();
    await expect(await page.getByText(name)).toBeVisible();
})