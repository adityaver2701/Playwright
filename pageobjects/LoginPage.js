class LoginPage {

    constructor(page)
    {
        this.page=page;
        this.signInbutton=page.locator("[value='Login']");
        this.userName =page.locator("#userEmail");
        this.password =page.locator("#userPassword");
    }

    async passURL()
    {
        await this.page.goto("https://rahulshettyacademy.com/client/");
    }

    async login(username,password)
    {
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.signInbutton.click();
    }
}
module.exports = {LoginPage};