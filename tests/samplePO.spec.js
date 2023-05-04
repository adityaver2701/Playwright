const {test, expect}=require('@playwright/test');
const {LoginPage} = require('../pageobjects/LoginPage');
const {HomePage} = require('../pageobjects/HomePage');
const {paymentPage} = require('../pageobjects/paymentPage');
const {ordersHistoryPage} = require('../pageobjects/ordersHistoryPage');
//Json->String->JS Object
const dataSet = JSON.parse(JSON.stringify(require("../utils/TestData.json")));

test.only('sampleTest', async ({ page }) => {
    const loginPage = new LoginPage(page);
   await loginPage.passURL();
   await loginPage.login(dataSet.username,dataSet.password);
    await page.waitForLoadState('networkidle');
    const homePage = new HomePage(page);
   await homePage.validatewithScreenshot();
   await homePage.addzaracoat();
   await homePage.addadidas();
   await homePage.iPhone13();
   await homePage.navigateToPayment();
    const paymentpage = new paymentPage(page);
   await paymentpage.fillDetails(dataSet.cvvCode,dataSet.cardName,dataSet.couponCode);
    const orderHistoryPage = new ordersHistoryPage(page);
   await orderHistoryPage.verifyorderHistory();
   await orderHistoryPage.signout();
  });