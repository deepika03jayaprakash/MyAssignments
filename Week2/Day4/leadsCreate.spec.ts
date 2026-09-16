import { test } from "@playwright/test"; //Importing the Playwright test packages


test('salesforceCreateLeads_Validation', async ({ page }) => {  //Using test method and assigning the testname and Page fixer

    await page.goto('https://login.salesforce.com/?locale=in') // To load the url

    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com') //Entering value for Username field using id attribute name
    await page.keyboard.press('Enter') // Click on Enter
    await page.locator('.input.r4.wide.mb16.mt8.password').fill('TestLeaf@2025') // Entering value for password field using class attribute name
    await page.locator('[type="submit"]').click() //Click on Login button using attribute method
    await page.locator('.slds-icon-waffle').click()
    await page.locator('[aria-label="View All Applications"]').click()
    await page.locator('[placeholder="Search apps or items..."]').fill('Leads')
    await page.waitForTimeout(10000)
    await page.locator('[data-label="Leads"]').click()
    // await page.locator('//div[@title="New"]').nth(0).click() - used nth method
    await page.locator('(//div[@title="New"]) [1]').click()
    await page.locator('[name="salutation"]').click()
    await page.locator('[data-value="Mrs."]').click()
    await page.locator('[placeholder="Last Name"]').fill('JayaprakashLead')
    await page.locator('[name="Company"]').fill('Infy')
    await page.locator('[name="SaveEdit"]').click()
    let message = await page.locator('.toastMessage').textContent()
    console.log(message);


}
)