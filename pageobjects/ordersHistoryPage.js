class ordersHistoryPage {

    constructor(page)
    {
        this.page=page;
        this.OrdersHistory = page.getByText('Orders History Page');
        this.getordernumber = page.locator("(//td[@class='em-spacer-1']//label)[2]");
        this.selectHome = page.getByRole('button', { name: ' HOME' });
        this.signOut = page.getByRole('button', { name: 'Sign Out' });
    }

    

    async verifyorderHistory()
    {
        const bookID = await this.getordernumber.allTextContents();
        console.log(bookID);
        await this.OrdersHistory.click();
    }

    async signout()
    {
        await this.selectHome.click();
        await this.signOut.click();
    }
}
module.exports = {ordersHistoryPage};