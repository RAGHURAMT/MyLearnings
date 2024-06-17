const {test, expect} = require('@playwright/test');

test('frames', async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');

    //Get the total frames
    const allFrames = await page.frames();
    
    //approach 1: Using name or url
    // const name = await page.frame('name'); // if name is present
    // const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    // await frame1.fill('input[name="mytext1"]', "Raghu");

    //approach 2: Using frame locator
    const inputBox = await page.frameLocator("frame[src='frame_1.html']").locator('input[name="mytext1"]');
    await inputBox.fill('Hi');
});

test.only('Inner frames/ Nested frames', async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
    // await frame3.locator('input[name="mytext3"]').fill('welcome');
    const childFrames = await frame3.childFrames(); // This will return array of frames
    await childFrames[0].locator("//*[@id='i5']/div[3]/div").check();
});