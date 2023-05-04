const {test, expect, request}=require('@playwright/test');
const loginPayLoad = {userEmail:"penetacle@gmail.com",userPassword:"Password@123"};
let token;


// test.beforeAll( async ()=>
// {
// const apiContext = await request.newContext();
// const responce = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
// {
//     data:loginPayLoad
// })
// expect(responce.ok()).toBeTruthy();
// const responseJson = await responce.json();
// const token = responseJson.token;
// console.log(token);
// });

test('test34', async ({ page }) => {
  // page.addInitScript(value =>
  //   {
  //     window.localStorage.setItem('token',value);
  //   }, token);
  await page.goto('https://rahulshettyacademy.com/client/');
  await page.getByPlaceholder('email@example.com').click();
  await page.getByPlaceholder('email@example.com').fill('penetacle@gmail.com');
  await page.getByPlaceholder('enter your passsword').click();
  await page.getByPlaceholder('enter your passsword').fill('Password@123');
  await page.getByRole('button', { name: 'Login' }).click();
  //zara coat 3
  await page.waitForLoadState('networkidle');
  await page.locator("//div[@class='container']").screenshot({path: 'partial screenshot.png'});
  await page.getByRole('button', { name: 'View' }).first().click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  //await page.locator('body').click();
  await page.getByRole('link', { name: 'Continue Shopping❯' }).click();
  //addidas original
  await page.getByRole('button', { name: 'View' }).nth(1).click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByRole('link', { name: 'Continue Shopping❯' }).click();
  //IPhone 13 pro
  await page.getByRole('button', { name: 'View' }).nth(2).click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByRole('link', { name: 'Continue Shopping❯' }).click();
  //select cart
  await page.locator("(//button[@class='btn btn-custom'])[3]").click();
  await page.getByRole('button', { name: 'Checkout❯' }).click();
  await page.locator('input[type="text"]').nth(1).click();
  await page.locator('input[type="text"]').nth(1).fill('999');
  await page.locator('input[type="text"]').nth(2).click();
  await page.locator('input[type="text"]').nth(2).fill('adityaverma');
  await page.locator('input[name="coupon"]').click();
  await page.locator('input[name="coupon"]').fill('rahulshettyacademy');
  await page.getByRole('button', { name: 'Apply Coupon' }).click();
  await page.getByText('Place Order').click();
  await page.getByText('Please Enter Full Shipping Information').click();
  await page.getByPlaceholder('Select Country').click();
  await page.getByPlaceholder('Select Country').type('Ind');
  await page.locator("//span[text()=' India']").click();
  await page.getByText('Place Order').click();
  // (//td[@class='em-spacer-1']//label)[2]
  //await expect(page.locator("(//td[@class='em-spacer-1']//label)[2]")).toBeVisible();
  const bookID=await page.locator("(//td[@class='em-spacer-1']//label)[2]").allTextContents();
  console.log(bookID);
  await page.getByText('Orders History Page').click();
  await page.getByRole('button', { name: ' HOME' }).click();
  await page.getByRole('button', { name: 'Sign Out' }).click();
});

test('image comparison', async ({ page }) => {
await page.goto("https://www.rediff.com/");
expect(await page.screenshot()).toMatchSnapshot('landing.png');

});