const {test}=require('@playwright/test');


test('First Playwright test', async ({browser})=>
{
    const context = await browser.newContext();
     const page = await context.newPage();
    await page.goto("https://www.way2automation.com/way2auto_jquery/index.php");
    await page.locator("//input[@name='name']").type("Full Name");
    await page.locator("//input[@name='phone']").type("0987654321");
    await page.locator("//input[@name='email']").type("name@email.com");
    const dropdown =page.locator("//select[@name='country']");
    await dropdown.selectOption("India");
    await page.locator("//input[@name='city']").type("Delhi");
    await page.locator("(//input[@name='username'])[2]").type("Aditya123");
    await page.locator("(//input[@name='password'])[2]").type("password@123");
    await page.locator("//input[@value='Submit']").click;
    await page.waitForTimeout(2000);
});

// test('page Playwright test', async ({page})=>
// {
//     await page.goto("http://eaapp.somee.com/");
// });