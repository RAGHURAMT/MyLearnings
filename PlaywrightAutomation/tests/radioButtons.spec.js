const {test, expect} = require('@playwright/test');

test('radio buttons', async({page})=>{
    await page.goto('https://www.itera-qa.azurewebsites.net/home/automation'); //This website is not working
    await page.waitForTimeout(2000);
    await page.locator("//input[@value='option2']").check(); //Male radio button
    // await page.check("//input[@value='option2']"); //alternative way
    await expect(await page.locator("//input[@value='option2']")).toBeChecked();
    await expect(await page.locator("//input[@value='option2']").isChecked()).toBeTruthy();

    await page.locator("//input[@value='option1']");//Female radio button
    await expect(await page.locator("//input[@value='option1']").isChecked()).toBeFalsy();

});

test('CheckBoxes', async({page})=>{
    await page.goto('https://www.itera-qa.azurewebsites.net/home/automation');  //This website is not working
    await page.waitForTimeout(2000);
    
    //Single checkbox
    await page.locator('//input[@id="monday" and @type="checkbox"]').check();
    // await page.check('//input[@id="monday" and @type="checkbox"]'); //Alternative way
    await expect(await page.locator('//input[@id="monday" and @type="checkbox"]')).toBeChecked();
    await expect(await page.locator('//input[@id="monday" and @type="checkbox"]').isChecked()).toBeTruthy();

    //multiple checkboxes
    const checkboxes = [
        '//input[@id="monday" and @type="checkbox"]',
        '//input[@id="sunday" and @type="checkbox"]',
        '//input[@id="saturday" and @type="checkbox"]'
    ];
    for(const checkbox of checkboxes){ // This will select multiple checkboxes
        await page.locator(checkbox).check(); //This will selct the checkbox
    }
    for(const checkbox of checkboxes){ // This will unselect multiple checkboxes
        if(page.locator(checkbox).isChecked()) 
        {
            await page.locator(checkbox).uncheck(); //This will uncheck the checkbox
        } 
    }

})