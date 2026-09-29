import {test,expect} from "@playwright/test"

test('multipleUpload',async ({page}) => {

    await page.goto ('https://www.leafground.com/file.xhtml')

    let multipleUpload = page.locator('(//input[@type="file"])[2]')  //To use set input file we are using input type=file locator
    await multipleUpload.setInputFiles([    //Using  setInputFiles() with an array of file paths.
        'Data/img1.png',
        'Data/images2.jpg'
    ])

    await expect(page.locator('[class="ui-fileupload-filename"]').nth(1)).toContainText('img1.png') //Assertion
    await expect(page.locator('[class="ui-fileupload-filename"]').nth(2)).toContainText('images2.jpg')

    await page.locator('//span[text()="Upload"]').click()

    //add toast message code to verify

    let message = await page.locator('[class="ui-growl-title"]').textContent()
    console.log(message)
        
})