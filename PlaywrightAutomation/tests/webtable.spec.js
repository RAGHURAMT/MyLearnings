const {test, expect} = require('@playwright/test');

test('webTable', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = await page.locator('#productTable');
    const columns = await table.locator('thead tr th');
    console.log('No of columns: ', await columns.count())
    await expect(await columns.count()).toBe(4);

    const rows = await table.locator('tbody tr');
    console.log('No of rows: ', await rows.count())
    await expect(await rows.count()).toBe(5);

    //Select checkbox for product 4
    const matchedRow = await rows.filter({
        has: page.locator('td'),
        hasText: 'Product 4'
    })
    await matchedRow.locator('input').check();

    //select multiple products using reusuable function
    await selectProduct(rows, page, 'Product 2');
    await selectProduct(rows, page, 'Product 3');
    await selectProduct(rows, page, 'Product 4');

    //Print all products details from all the pages
    const pages = await page.locator('.pagination li a');
    console.log('No of Pages: ', await pages.count())
    for(let p=0; p<await pages.count();p++){
        if(p>0){
            await pages.nth(p).click();
        }
        for(let i=0; i<await rows.count(); i++){
            let row = await rows.nth(i);
            const td = await row.locator('td');
            for(let j=0; j<await td.count()-1; j++){ //Here, added -1 because last column is having checkbox
                const text = await td.nth(j).textContent();
                console.log(text);
            }
        }
    }
})

async function selectProduct(rows, page, name){
    const matchedRow = await rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    await matchedRow.locator('input').check();
}

test.only('Date Picker', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    // await page.fill('#datepicker', '06/30/2023');

    //alternative way when we cant use the above fill method
    const year = '2024';
    const month = 'August';
    const date = '22';

    await page.click('#datepicker');
    while(true){
       const currentYear =  await page.locator('.ui-datepicker-year').textContent();
       const currentMonth = await page.locator('.ui-datepicker-month').textContent();
       if(currentYear == year && currentMonth == month){
            break;
       }
       await page.locator('[title="Next"]').click();
    //    await page.locator('[title="Prev"]').click();
    } 
    //Date selection using loop
    const dates = await page.$$("//a[@class='ui-state-default']")
    for(const dt of dates){
        if(await dt.textContent()==date){
            await dt.click();
            break;
        }
    }
    //Select date without loop and by using xpath
    // page.locator(`//a[@class='ui-state-default'][text()='${date}']`).click();
})