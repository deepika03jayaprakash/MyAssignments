import { test, expect } from "@playwright/test"
import path from 'path'

test.use(
    {
        storageState: 'Data/sflogin.json', //Using storagestate for login
        viewport: { width: 1920 , height: 1080 }

    }
)

test('fileUpload_Salesforce', async ({ page }) => {

    await page.goto('https://orgfarm-36fba2afa5-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome') //Salesforce home page url

    await page.locator('.slds-icon-waffle').click(); //Click on App launcher icon

    await page.getByRole('button', { name: "View All Applications" }).click(); //Click on View all application from the dropdown
    await page.getByRole('combobox', { name: "Search apps or items..." }).fill('Accounts'); //Searching for accounts
    await page.locator('//mark[text()="Accounts"]').click(); //Click on Accounts
    await page.getByRole('button', { name: "New" }).click(); //Click on New Button
    await page.getByRole('textbox', { name: "Account Name" }).fill('Deepak'); //Click on New Button
    await page.getByRole('combobox', { name: "Rating" }).click() //Click on Rating dropdown
    await page.locator('[data-value="Warm"]').click() //Select Warm from Rating dropdown
    await page.getByRole('combobox', { name: "Type" }).click() //Click on Type dropdown
    await page.locator('[data-value="Prospect"]').click()
    await page.getByRole('combobox', { name: "Industry" }).click() //Click on Industry dropdown
    await page.locator('[data-value="Banking"]').click()
    await page.getByRole('combobox', { name: "Ownership" }).click() //Click on Ownership dropdown
    await page.locator('[data-value="Public"]').click()
    await page.locator('[name="SaveEdit"]').click();
    const toastmsg = await page.locator('.toastMessage.slds-text-heading--small.forceActionsText').textContent()
    console.log(toastmsg)
    expect(toastmsg).toContain('Account "Deepak" was created')


    // //Since the upload file button is inside the Notes span, we need to scroll to view the upload 
    const cardTitle = page.getByTitle('Notes & Attachments')
    await cardTitle.scrollIntoViewIfNeeded()

    //upload file using input<type="file">
    let fupload = page.locator('(//input[@type="file"])')
    //Relative path
    await fupload.setInputFiles('Data/img1.png')
    await page.locator('//span[text()="Done"]').click() //Click on Done
    const success = page.locator('[data-key="success"]').nth(0).textContent();
    console.log(success)
    // expect(success).toContainText("file was added to the Account")
    // expect(success).toBeHidden();

    //upload file using event listener
    let fileuprefpromise = page.waitForEvent('filechooser')

    //trigger the click action
    await page.locator('//div[text()="Upload Files"]').click();

    //resolve the promise of event listener
    const sfupload = await fileuprefpromise

    //absolute path    
    await sfupload.setFiles(path.join(__dirname, '../../../Data/TestResume.docx'))

    await page.locator('//span[text()="Done"]').click()

    const success1 = await page.locator('[data-key="success"]').nth(0).textContent()
    console.log(success1)
    expect(success1).toContain("file was added to the Account")


})