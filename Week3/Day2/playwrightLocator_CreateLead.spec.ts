import { test } from "@playwright/test"

test('createLead_Using_PlaywrightLocator', async ({ page }) => {

    await page.goto('https://leaftaps.com/opentaps/control/main');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('Demosalesmanager'); //using getByRole playwright locator with textbox role
    await page.getByRole('textbox', { name: 'Password' }).click();  //using getByRole playwright locator with textbox role
    await page.getByRole('textbox', { name: 'Password' }).fill('crmsfa'); //using getByRole playwright locator with textbox role
    await page.getByRole('button', { name: 'Login' }).click(); //using getByRole playwright locator with button role
    await page.getByRole('link', { name: 'CRM/SFA' }).click(); //using getByRole playwright locator with link role
    await page.getByRole('link', { name: 'Leads' }).click() //using getByRole playwright locator with link role
    await page.getByRole('link', { name: 'Create Lead' }).click() //using getByRole playwright locator with link role
    await page.locator('[name="companyName"]').nth(1).fill('Wipro') //Using CSS selector (there is no accessbility tree to use playwright locator hence using CSS for form filling)
    await page.locator('[name="firstName"]').last().fill('Deepikaa')
    await page.locator('[id="createLeadForm_lastName"]').fill('Jayaprakash')
    await page.locator('[id="createLeadForm_personalTitle"]').fill('Mrs')
    await page.locator('[id="createLeadForm_generalProfTitle"]').fill('Quality Analyst')
    await page.locator('[id="createLeadForm_annualRevenue"]').fill('70000')
    await page.locator('[id="createLeadForm_departmentName"]').fill('IVS')
    await page.locator('[id="createLeadForm_primaryPhoneNumber"]').fill('8523614970')
    await page.locator('[type="submit"]').click()
    
})