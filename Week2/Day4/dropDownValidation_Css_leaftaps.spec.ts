import { test } from "@playwright/test"; //Import the Playwright test packages


test('dropDown_Cssselector_Validation', async ({ page }) => { //Using page fixer in this test method

    await page.goto('https://leaftaps.com/opentaps/control/main') // To hit and load the url
    await page.locator('#username').fill('democsr') //Entering User name by using #ID attribute name
    await page.locator('#password').fill('crmsfa') //Enterning Password by using #ID attribute name
    await page.locator('[type="submit"]').click() //Clicking on Login button by using [attribute method]
    await page.locator('text = CRM/SFA').click() //Clicking on CRM/SFA link by using visible text 
    await page.locator('text = Leads').first().click() //Clicking on Leads tab using visible text with .first()method to select first match
    await page.locator('text = Create Lead').nth(0).click() //Clicking on Create lead by using visible text with nth method.
    await page.locator('#createLeadForm_companyName').fill('Infosys') // #id attribute name as locator
    await page.locator('#createLeadForm_firstName').fill('Deepika')
    await page.locator('#createLeadForm_lastName').fill('Jayaprakash')
    await page.locator('[name="personalTitle"]').fill('Mrs')
    await page.locator('[name="generalProfTitle"]').fill('Deepika_PW_Training')
    await page.locator('#createLeadForm_annualRevenue').fill('7000')
    await page.locator('[name="departmentName"]').fill('IVS')
    let sourceDropdownvalues = page.locator('[name="dataSourceId"]>option')
    let sourceDropdowncount = await sourceDropdownvalues.count()
    console.log(sourceDropdowncount);

    for (let index = 0; index < sourceDropdowncount; index++) {
        console.log(await sourceDropdownvalues.nth(index).innerText());


    }

    await page.locator('[id="createLeadForm_primaryPhoneNumber"]').fill('9215634802')
    await page.locator('[name="submitButton"]').click()




});     
