import { expect, test } from "@playwright/test"

test.use(
    {
        storageState: 'Data/sflogin.json'
    }
)

test('Verify Lead Creation and Conversion to Opportunity', async ({ page }) => {

    await page.goto('https://orgfarm-36fba2afa5-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome') //Salesforce home page url
    
    await page.locator('.slds-icon-waffle').click(); //Click on App launcher icon
    await page.getByRole('button', { name: "View All Applications" }).click(); //Click on View all application from the dropdown
    await page.waitForLoadState('domcontentloaded')
    await page.getByRole('combobox', { name: "Search apps or items..." }).fill('Marketing'); //Searching for Marketing
    await page.locator('//mark[text()="Marketing"]').click(); //Click on Marketing CRM Classic
    let marketinghomepage =  page.locator('[title="Marketing CRM Classic"]')
    await page.waitForLoadState('domcontentloaded')
    await expect (marketinghomepage).toHaveText('Marketing CRM Classic') //Validating the marketing homepage using assertion
    await page.getByRole('link',{name:'Leads'}).click() //Click on Lead tab from marketing homepage
    let leadhomepage = page.locator('[class="slds-var-p-right_x-small"]')
    await expect (leadhomepage).toHaveText('Leads') //Validating Lead page using assertion
    await page.getByRole('button',{name:'New'}).click() //Click on New button from Lead
    await page.getByRole('combobox',{name:'Salutation'}).click() //Click on New button from Lead
    await page.locator('//span[@title="Mrs."]').click()
    let fname =  page.getByRole('textbox',{name:'First Name'})
    await fname.fill("Deepika")
    await page.getByRole('textbox',{name:'Last Name'}).fill("Deepakkumar")
    await page.getByRole('textbox',{name:'Company'}).fill("Google")
    await page.locator('[name="SaveEdit"]').click()
    let leadsuccessmsg = page.locator(".toastMessage.slds-text-heading--small.forceActionsText").nth(0)
    await expect (leadsuccessmsg).toContainText("created")
    await expect (page.locator('//lightning-formatted-name[text()="Mrs. Deepika Deepakkumar"]')).toBeVisible();
     await page.getByRole('button',{name:'Show more actions'}).click()
     await page.locator('//span[text()="Convert"]').click()
     await page.locator('//span[text()=" Create New Opportunity"]').click() 
     await page.getByRole('textbox',{name:'Opportunity Name'}).fill('TestQA')
     await page.locator('//button[text()="Convert"]').click()
     await expect( page.getByRole('heading',{name:"Your lead has been converted"})).toBeVisible()
     await page.getByRole('button',{name:"Go to Leads"}).click()
    await page.locator('[aria-label="Search"]').click()
    await page.locator('[aria-label="Search by object type"]').nth(0).click()
    await page.locator('[data-value="FILTER:Lead:Leads"]').click()
    await page.getByRole('searchbox',{name:"Search Leads"}).fill("Deepika Deepakkumar")
    await page.keyboard.press('Enter');
    await expect (page.locator('.noResultsTitle').nth(0)).toHaveText('No results for "Deepika Deepakkumar" in Leads')
     await page.locator('(//span[text()="Opportunities"])[1]').click()
     await page.getByRole('searchbox',{name:'Search this list...'}).fill('TestQA')
     let oppname = page.locator('//span[text()="TestQA"]').nth(0)
     await expect (oppname).toContainText('TestQA')

})