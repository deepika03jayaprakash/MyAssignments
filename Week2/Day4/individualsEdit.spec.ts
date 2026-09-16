import { test } from "@playwright/test"; //Importing the Playwright test packages


test('salesforceEditIndividuals_Validation', async ({ page }) => {  //Using test method and assigning the testname and Page fixer

    await page.goto('https://login.salesforce.com/?locale=in') // To load the url

    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com') //Entering value for Username field using id attribute name
    await page.keyboard.press('Enter') // Click on Enter
    await page.locator('.input.r4.wide.mb16.mt8.password').fill('TestLeaf@2025') // Entering value for password field using class attribute name
    await page.locator('[type="submit"]').click() //Click on Login button using attribute method
    await page.locator('.slds-icon-waffle').click()
    await page.waitForLoadState('domcontentloaded')
    await page.waitForTimeout (5000);
    await page.locator('[aria-label="View All Applications"]').click()
    await page.locator('[placeholder="Search apps or items..."]').fill('Individuals')
    await page.locator('//a[@data-label="Individuals"]').click()
    await page.locator('[aria-label="Search this list..."]').fill('Deepakkumar')
    await page.keyboard.press('Enter')
    await page.waitForTimeout (5000);
    await page.locator('//lightning-icon[@class="slds-icon-utility-down slds-button__icon slds-icon_container forceIcon"]').click() // failing here, tried given different xpath
    await page.locator('//a[@title="Edit"]').click()
    await page.locator('//span[text()="Mr."]').click()
    await page.locator('[placeholder="First Name"]').fill('Deepika')
    await page.locator("//span[text()='Save']").click()
   //How to validate the first name got added?

}
)