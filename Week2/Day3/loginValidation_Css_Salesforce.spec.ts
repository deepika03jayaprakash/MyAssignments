import { test } from "@playwright/test"; //Importing the Playwright test packages


test('salesforceLoginValidation_Css', async ({ page }) => {  //Using test method and assigning the testname and Page fixer

    await page.goto('https://login.salesforce.com/?locale=in') // To load the url

    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com') //Entering value for Username field using id attribute name
    // await page.locator('#Login').click()
    await page.keyboard.press('Enter') // Click on Enter
    await page.locator('.input.r4.wide.mb16.mt8.password').fill('TestLeaf@2025') // Entering value for password field using class attribute name
    await page.locator('[type="submit"]').click() //Click on Login button using attribute method
    await page.waitForTimeout(5000) //Timeout for 5 second
    page.locator('text = Sales') // Locator will search for Sales visible text in the application
    
    let pageTitle = await page.title() // To get the Page title
    console.log(pageTitle); //Print the Page title in console

    let pageUrl = page.url() // To get the Page url
    console.log(pageUrl); //Print the Page url in console


})