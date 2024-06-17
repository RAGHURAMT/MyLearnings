const {test, expect} = require('@playwright/test');

test.skip('Alert with OK', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForTimeout(2000);

    //Enabling dialog window handler to handle the alerts before clicking on the button
    page.on('dialog', async dialog=>{
        await expect(dialog.type()).toContain('alert');
        await expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    })
    await page.click('//button[normalize-space()="Alert"]');
})

test.skip('Confirmation dialog Alert with OK and Cancel', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForTimeout(2000);

    //Enabling dialog window handler to handle the alerts before clicking on the button
    page.on('dialog', async dialog=>{
        await expect(dialog.type()).toContain('confirm');
        await expect(dialog.message()).toContain('Press a button!');
        await dialog.accept();
        // await dialog.dismiss();
    })
    await page.click('//button[normalize-space()="Confirm Box"]');
    await page.waitForTimeout(2000);
    await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!');
});

test.only('Confirmation dialog prompt', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForTimeout(2000);

    //Enabling dialog window handler to handle the alerts before clicking on the button
    page.on('dialog', async dialog=>{
        await expect(dialog.type()).toContain('prompt');
        await expect(dialog.message()).toContain('Please enter your name:');
        await expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept('Raghuram');
        // await dialog.dismiss();
    })
    await page.click('//button[normalize-space()="Prompt"]');
    await page.waitForTimeout(2000);
    await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello Raghuram! How are you today?');
})