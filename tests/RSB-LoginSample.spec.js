const {test, expect} = require('@playwright/test');
const {POManager} = require('../pageobjects/POManager');
const dataset = JSON.parse(JSON.stringify(require('../utils/RSB-LoginSampleTestData.json')));

test('RSB Valid Login Test', async ({browser}) =>
{
    // Setup
    const context = await browser.newContext();
    const page = await context.newPage();
    // Open page and verify title
    await page.goto("https://InsertURLHere");
    await expect(page).toHaveTitle("InsertWebsiteTitleHere");
    const poManager = new POManager(page);
    // Log in
    const loginPage = poManager.getLoginPage();
    await loginPage.validLogin(dataset.validUsername, dataset.validPassword)
    // Verify dashboard is visible
    await loginPage.dashbaordCheck();
});

test('RSB Invalid Login Test', async ({browser}) =>
{
    // Setup
    const context = await browser.newContext();
    const page = await context.newPage();
    // Open page and verify title
    await page.goto("https://InsertURLHere");
    await expect(page).toHaveTitle("InsertWebsiteTitleHere");
    const poManager = new POManager(page);
    // Log in
    const loginPage = poManager.getLoginPage();
    await loginPage.invalidLogin(dataset.invalidUsername, dataset.invalidPassword)
    // Verify Error message is visible
    
});