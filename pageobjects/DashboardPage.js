class DashboardPage
{
    constructor(page)
    {
        this.page = page;
        this.dashbaordLabel = page.locator("InsertDashboardLabelLocatorHere");
    }
    async dashbaord()
    {
        await this.DashbaordLabel.waitFor();
    }
    async invalidLogin(username,password)
    {
        await this.userName.fill(username);
        await this.passWord.fill(password);
        await this.logInButton.click();
    }
}
module.exports = {DashboardPage};