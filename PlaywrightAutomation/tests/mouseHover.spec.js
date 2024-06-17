const{test, expect} = require('@playwright/test');

test('mouse hover', async({page})=>{
    await page.goto('https://demo.opencart.com/');
    const desktop = await page.locator("//a[normalize-space()='Desktops']");
   const mac = await page.locator("//a[normalize-space()='Mac (1)']");

   //mouse hover
   await desktop.hover();
   await mac.hover();
})

test('mouse rightclick or context click', async({page})=>{
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo/input.html');
    const button = await page.locator("//span[@class='context-menu-one btn btn-neutral']") // "//span[normalize-space() = 'right click me']"
    await button.click({button:'right'}); //This will do the right click
})

test('mouse double click', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const button = await page.locator("//button[normalize-space()='Copy Text']");
    await button.dblclick(); // This will do the double click
    const field2 = await page.locator("#field2");
    await expect(field2).toHaveValue('Hello World!');
})

test.only('Drag and Drop', async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
    const rome = await page.locator('#box6');
    const italy = await page.locator('#box106');

    //Approach 1
    await rome.hover();
    await page.mouse.down();

    await italy.hover();
    await page.mouse.up();

    //Approach 2
    await rome.dragTo(italy);
})
