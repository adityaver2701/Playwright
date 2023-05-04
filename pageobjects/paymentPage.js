class paymentPage {

    constructor(page)
    {
        this.page=page;
        this.textbox = page.locator('input[type="text"]');
        this.cvv = page.locator("(//input[@class='input txt'])[1]");
        this.coupon = page.locator('input[name="coupon"]');
        this.applyCoupon = page.getByRole('button', { name: 'Apply Coupon' });
        this.placeOrder = page.getByText('Place Order');
        this.selectCountry = page.getByPlaceholder('Select Country');
        this.selectIndia = page.locator("//span[text()=' India']");
        this.OrdersHistory = page.getByText('Orders History Page');
    }

    

    async fillDetails(cvvcode,NameOnCard,couponcode)
    {
        await this.cvv.click();
        await this.cvv.fill(cvvcode);
        await this.textbox.nth(2).click();
        await this.textbox.nth(2).fill(NameOnCard);
        await this.coupon.fill(couponcode);
        await this.applyCoupon.click();
        await this.selectCountry.type('Ind');
        await this.selectIndia.click();
        await this.placeOrder.click();
    }
}
module.exports = {paymentPage};