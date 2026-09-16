import { test } from "@playwright/test"; //Importing the Playwright test packages


test('salesforceCreateIndividuals_Validation', async ({ page }) => {  //Using test method and assigning the testname and Page fixer

    await page.goto('https://login.salesforce.com/?locale=in') // To load the url

    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com') //Entering value for Username field using id attribute name
    await page.keyboard.press('Enter') // Click on Enter
    await page.locator('.input.r4.wide.mb16.mt8.password').fill('TestLeaf@2025') // Entering value for password field using class attribute name
    await page.locator('[type="submit"]').click() //Click on Login button using attribute method
    await page.locator('.slds-icon-waffle').click()
    await page.locator('[aria-label="View All Applications"]').click()
    await page.locator('[placeholder="Search apps or items..."]').fill('Individuals')
    await page.waitForTimeout(5000);
    await page.locator('//a[@data-label="Individuals"]').click()
    await page.locator('a>lightning-icon').nth(13).click()
    await page.locator("//span[contains (text(),'New Individual')]").click()
    await page.locator('//input[@placeholder="Last Name"]').fill('Deepakkumar')
    await page.locator("//span[text()='Save']").click()
    let message = await page.locator('.toastMessage').textContent()
    // let lastName = await page.locator('div[title="Deepakkumar"] span').textContent()  
    console.log(message);
    // console.log(lastName);
    // How to validate the last name?
    




})