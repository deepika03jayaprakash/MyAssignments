import { expect, test } from "@playwright/test"

test.use(
    {
        storageState: 'Data/sflogin.json'
    }
)

test('Salesforce Chatter', async ({ page }) => {

    await page.goto('https://orgfarm-36fba2afa5-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome') //Salesforce home page url

    await page.locator('.slds-icon-waffle').click(); //Click on App launcher icon
    await page.getByRole('button', { name: "View All Applications" }).click(); //Click on View all application from the dropdown
    await page.waitForLoadState('domcontentloaded')
    await page.getByRole('combobox', { name: "Search apps or items..." }).fill('Service'); //Searching for Service
    await page.locator('(//mark[text()="Service"])[1]').click(); //click on service link
    await expect(page.locator('[title="Service"]')).toBeVisible()  //verification of service page title
    await page.getByRole('link', { name: 'Cases' }).click()  //Click on case tab 
    await page.getByRole('button', { name: 'New' }).click()
    await expect(page.getByRole('heading', { name: 'New Case' })).toBeVisible()
    await page.getByRole('combobox', { name: 'Contact Name' }).click()
    await page.getByRole('option', { name: 'Add New Contact' }).click()
    await expect(page.getByRole('heading', { name: 'New Contact' })).toBeVisible()
    await page.getByRole('combobox', { name: 'Salutation' }).click()
    await page.getByRole('option', { name: 'Mr.' }).click()
    await page.getByText('First Name').fill('Krithvik')
    await page.getByText('Last Name').fill('Deepakkumar')
    await page.getByRole('button', { name: 'Save' }).click()
    await expect(page.locator('.toastMessage.slds-text-heading--small.forceActionsText')).toContainText('created')
    await page.locator('[class="slds-icon slds-icon_xx-small"]').last().click()
    await expect(page.locator('[aria-label="Contact Name"]').nth(0)).toHaveValue('Krithvik Deepakkumar')
    await page.getByRole('combobox', { name: 'Account Name' }).click()
    await page.getByRole('option', { name: 'Add New Account' }).click()
    await expect(page.getByRole('heading', { name: 'New Account' })).toBeVisible()
    await page.getByRole('textbox', { name: 'Account Name' }).fill('Krithvik Deepakkumar')
    await page.getByText('Account Number').fill('421585204695')
    await page.getByRole('combobox', { name: 'Rating' }).click()
    await page.getByRole('option', { name: 'Hot' }).click()
    await page.getByRole('button', { name: 'Save' }).click()
    await expect(page.locator('.toastMessage.slds-text-heading--small.forceActionsText')).toContainText('created')
    await page.locator('[class="slds-icon slds-icon_xx-small"]').last().click()
    await expect(page.locator('[aria-label="Account Name"]').nth(0)).toHaveValue('Krithvik Deepakkumar')
    await page.getByRole('combobox', { name: 'Status' }).click()
    await page.getByRole('option', { name: 'New' }).click()
    await page.getByRole('combobox', { name: 'Priority' }).click()
    await page.getByRole('option', { name: 'High' }).click()
    await page.getByRole('combobox', { name: 'Case Origin' }).click()
    await page.getByRole('option', { name: 'Email' }).click()
    await page.getByRole('textbox', { name: 'Subject' }).fill('Product Return Request')
    await page.getByRole('textbox', { name: 'Description' }).fill('Requesting a return for a defective product')
    await page.locator('[name="SaveEdit"]').click()
    await expect(page.locator('.toastMessage.slds-text-heading--small.forceActionsText')).toContainText('created')
    await page.locator('[class="slds-icon slds-icon_xx-small"]').last().click()
    await expect(page.locator('.preamble_custom-preamble')).toContainText('Case created')
    console.log(await page.locator('[class="cuf-body supportCompactFeedItemRecordSummaryContent"]').innerText())
    await page.locator('[title="Edit Status"]').click()
    await page.getByRole('combobox', { name: 'Status' }).click()
    await page.getByRole('option', { name: 'Escalated' }).click()
    await page.getByRole('button', { name: 'Save' }).click()
    await expect(page.locator('(//lightning-formatted-text[text()="Escalated"])[2]')).toHaveText("Escalated")
    await page.getByRole('button', { name: 'Share an update...' }).click()
    await page.getByRole('textbox', { name: 'Share an update...' }).fill('Testing Chatter')
    await page.locator('[title="Click, or press Ctrl+Enter"]').click()
    await expect(page.locator('.toastMessage.slds-text-heading--small.forceActionsText')).toContainText('Your update was shared.')
    await page.locator('[class="slds-icon slds-icon_xx-small"]').last().click()
    let updatecategory = await page.locator('[class="cuf-body"]').locator('[class="uiOutputText"]').textContent()
    console.log(updatecategory)
    expect(updatecategory).toContain('Testing Chatter')
    await page.locator('a.cuf-feedItemActionTrigger').nth(0).click()
    await page.getByRole('menuitem', { name: 'Like on Chatter' }).click()
    await expect(page.locator('.toastMessage.slds-text-heading--small.forceActionsText')).toHaveText('Post was liked.')
    await page.getByRole('link', { name: 'Chatter' }).click()
    expect(updatecategory).toContain('Testing Chatter')
    await expect(page.locator('[title="Unlike"]').first()).toBeVisible()
})