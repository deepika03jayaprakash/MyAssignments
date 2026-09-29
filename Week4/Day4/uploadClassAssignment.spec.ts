import { expect, test } from "@playwright/test"

import path from 'path'

test('uploadFile', async ({ page }) => {

    await page.goto('https://www.naukri.com/registration/createAccount')
    await page.getByRole('radio', { name: "I'm experienced. I have work experience (excluding internships)" }).click();
    // await page.getByRole('button', { name: "Upload Resume" }).click();

    //create the event listener
    let fileupref = page.waitForEvent('filechooser')

    //trigger the click action
    await page.getByRole('button', { name: "Upload Resume" }).click();

    //resolve the promise of event listener
    const upload = await fileupref

    //relative path
    // await upload.setFiles('Data/TestResume.docx')


    //absolute path
    await upload.setFiles(path.join(__dirname, '../../../Data/TestResume.docx'))
    console.log(__dirname)// D:\Playwright Workspace\tests\Week4\Day4


    //retry assertion

    await expect(page.locator('[class="file-name ellipsis"]')).toHaveText('TestResume.docx')


})