const {test, expect} = require('@playwright/test');
const exp = require('constants');

test('dropdowns', async({page})=> {
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Multiple ways to select the value from the dropdown
    await page.locator('#country').selectOption({label: 'India'}); //Option 1 //label
    await page.locator('#country').selectOption('United Kingdom'); //Option 2 //Visible text 
    await page.locator('#country').selectOption({value: 'uk'}); //Option 3 //value
    await page.locator('#country').selectOption({index: 1 }); //option 4 //By using index
    await page.selectOption('#country', 'India'); //option 5 //by text

    //Assertions
    //1. We can check total no of options in the dropdown
    const totalCountries = await page.locator('#country option'); //option will get all the available options
    await expect(totalCountries).toHaveCount(10);

    //2. Check no of options in the dropdown
    const options = await page.$$('#country option');
    console.log("No of options: ", options.length);
    await expect(options.length).toBe(10);

    //3. Presence of value in the dropdown
    const allCountryValues = await page.locator('#country').textContent();
    await expect(allCountryValues.includes('India')).toBeTruthy();

    //4. Presence of value in the dropdown using loop
    const options2 = await page.$$('#country option');
    let status = false;
    for(let option of options2){
        console.log(await option.textContent());
        let value = await option.textContent();
        if(value.includes('France')){
            status = true;
            break;
        }
    }
    expect(status).toBeTruthy();

    //5. Select value in the dropdown using loop
    const options3 = await page.$$('#country option');
    for(let option of options3){
        let value = await option.textContent();
        if(value.includes('France')){
            await page.selectOption('#country', value);
            break;
        }
    }
});

test('Multiselect dropdown', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.selectOption('#colors', ['Blue', 'Red', 'Yellow']); //This will select multiple options from the dropdown

    //Assertions
    //1. Check no of options in the dropdown --> Same as normal dropdown
})

test('Bootstrap dropdown', async({page})=>{
    await page.goto('https://www.jquery-az.com/bootstrap-5-dropdown/#'); //This link is not working
    await page.locator('.multiselect').click(); //This will click on the dropdown

    //Rest all assertions and selections are same as normal dropdown
    
})

test('Auto suggest dropdown', async({page})=>{
    await page.goto('https://www.redbus.in/');
    await page.locator('#src').fill('Delhi');
    await page.waitForSelector("(//li[@class='sc-iwsKbI jTMXri'])/div/text[1]"); //This will wait for the options to display
    const fromCityOptions = await page.$$("(//li[@class='sc-iwsKbI jTMXri'])/div/text[1]");
    for(let option of fromCityOptions){
        const value = await option.textContent();
        if(value.includes('Akshardham Mandir')){
            await option.click();
            break;
        }
    }
})

test.only('Hidden options dropdown', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
    //SDET-QA
    await page.locator("[name='username']").fill('Admin');
    await page.locator("[name='password']").fill('admin123');
    await page.locator("[type='submit']").click();

    await page.click("//span[normalize-space()='PIM']");
    await page.click('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[6]/div/div[2]/div/div/div[2]');
    await page.waitForTimeout(2000);
    const options = await page.$$("//div[@role='listbox']//span");

    for(let option of options){
        const jobTitle = await option.textContent();
        if (jobTitle.includes('QA Engineer')){
            await option.click();
            break;
        }
    }
    await page.waitForTimeout(4000);
})