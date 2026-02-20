const { log } = require("node:console");

class LoginPage
{
    constructor(page)
    {
        this.page = page;
        this.logInButton = page.locator("InsertLoginButtonLocatorHere");
        this.userName = page.locator("InsertUsernameLocatorHere");
        this.passWord = page.locator("InsertPasswordLocatorHere");
        this.dashbaordLabel = page.locator("InsertDashboardLabelLocatorHere");
        this.LoginPageErrorMessage = page.locator("InsertErrorMessageLocatorHere");

    }
    async validLogin(validUsername,validPassword)
    {
        await this.userName.fill(validUsername);
        await this.passWord.fill(validPassword);
        await this.logInButton.click();
    }
    async invalidLogin(invalidUsername,invalidPassword)
    {
        await this.userName.fill(invalidUsername);
        await this.passWord.fill(invalidPassword);
        await this.logInButton.click();
    }
    async dashbaordCheck()
    {
        await this.dashbaordLabel.waitFor();  
    }  
    async getErrorMessage(LoginPageErrorText)
    {
        return await this.LoginPageErrorMessage.textContent(LoginPageErrorText);
    }
}
module.exports = {LoginPage};