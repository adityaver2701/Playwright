class HomePage {

    constructor(page)
    {
        this.page=page;
        this.allProducts = page.locator("//div[@class='container']");
        this.productsText = page.locator(".card-body b");
        this.cart =  page.locator("[routerlink*='cart']");
        this.orders = page.locator("button[routerlink*='myorders']");
        this.zaracoatview = page.locator("(//button[text()=' View'])[1]");
        this.adidasview = page.locator("(//button[text()=' View'])[2]");
        this.iPhoneview = page.locator("(//button[text()=' View'])[3]");
        this.Productview = page.getByRole('button', { name: 'View' });
        this.AddToCart = page.getByRole('button', { name: 'Add to Cart' });
        this.continueShopping = page.getByRole('link', { name: 'Continue Shopping❯' });
        this.checkout = page.getByRole('button', { name: 'Checkout❯' });
    }

    

    async validatewithScreenshot()
    {
        await this.allProducts.screenshot({path: 'partial screenshot.png'});
    }

    async addzaracoat()
    {
        await this.zaracoatview.click();
        await this.AddToCart.click();
        await this.continueShopping.click();
    }

    async addadidas()
    {
        await this.adidasview.click();
        await this.AddToCart.click();
        await this.continueShopping.click();
    }

    async iPhone13()
    {
        await this.iPhoneview.click();
        await this.AddToCart.click();
        await this.continueShopping.click();
    }

    async navigateToPayment()
    {
        await this.cart.click();
        await this.checkout.click();
    }


}
module.exports = {HomePage};