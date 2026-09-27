import { test } from "@playwright/test"

test('merging_WindowHandling', async ({ page, context }) => {

    page.goto('https://leaftaps.com/opentaps/control/main')
    await page.getByRole('textbox', { name: 'Username' }).fill('Demosalesmanager');
    await page.getByRole('textbox', { name: 'Password' }).fill('crmsfa');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'CRM/SFA' }).click(); //using getByRole playwright locator with link role
    await page.getByRole('link', { name: 'Leads' }).click() //using getByRole playwright locator with link role
    await page.getByRole('link', { name: 'Merge Leads' }).click()

    let [newpage1] = await Promise.all([context.waitForEvent('page'), page.locator('[src="/images/fieldlookup.gif"]').first().click()]); //Context 1, using concurrent context syntax
    let table1 = newpage1.locator('[class="x-grid3-row-table"]').nth(0); //Table1 locator for the first row
    await table1.locator('tbody tr td a').nth(0).click() //Clicking the link which is inside a  A tag

    let [newpage2] = await Promise.all([context.waitForEvent('page'), page.locator('[src="/images/fieldlookup.gif"]').last().click()]); //Context 2, using concurrent context syntax
    let table2 = newpage2.locator('[class="x-grid3-row-table"]').nth(1); //Table2 locator for the second row
    await table2.locator('tbody tr td a').nth(0).click() //Clicking the link which is inside a  A tag

    page.once('dialog', async (alert) => {  //Using Event listener to accept the alert
        await alert.accept()
    })
    await page.locator('.buttonDangerous').click()  //Clicking the merge button after declaring the event listener
    let aftermerge = await page.title(); //Getting the page title after merge
    console.log(aftermerge) // Printing the after merge page title in the console (View Lead | opentaps CRM)


})