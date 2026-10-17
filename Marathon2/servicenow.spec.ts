import { test, expect } from "@playwright/test"

test('ServiceNow_MobileOrdering', async ({ page, context }) => {

    await page.goto('https://developer.servicenow.com/dev.do')
    await page.getByRole('button', { name: 'Sign In' }).click()
    await page.locator('#username').fill('deepika03jayaprakash@gmail.com')
    await page.keyboard.press('Enter')
    await page.locator('#password').fill('Harinikaa@26')
    await page.keyboard.press('Enter')
    await page.getByRole('button', { name: "Manage my instance" }).click()
    let [instancepage] = await Promise.all([context.waitForEvent('page'), await page.getByRole('link', { name: "https://dev387168.service-now.com/ url" }).click()]);
    await instancepage.waitForLoadState("domcontentloaded")
    await instancepage.getByRole('menuitem', { name: "All" }).click()
    await instancepage.locator('.item-icon .label').filter({ hasText: 'Service Catalog' }).click()
    let frame = instancepage.frameLocator('#gsft_main')
    await frame.locator('td .homepage_category_only_description_cell a h2').filter({ hasText: "Mobiles" }).click()
    await frame.locator('a h3').filter({ hasText: 'Apple iPhone 13 pro' }).click()
    await frame.locator('.input-group-radio').filter({ hasText: 'No' }).click()
    // await frame.locator('[class="col-xs-6  form-field input_controls sc-form-field "]').nth(1).fill('8563214096')
    let monthlyDataAllowance = frame.locator('[class="form-control cat_item_option "]')
    await monthlyDataAllowance.selectOption('500MB [add $1.00]')
    await frame.getByText('Gold').click()
    await frame.getByText('512 GB [add $300.00]').click()
    await frame.getByRole('button', { name: 'Order Now' }).click()
    await expect(frame.locator('[class="notification notification-success"]').filter({ hasText: 'Thank you, your request has been submitted' })).toBeVisible({ timeout: 15000 })

    //If I give Yes in 19th line, I am not able to select the phone number. its showing its not input/text field. Kindly provide ur input for this











}
)