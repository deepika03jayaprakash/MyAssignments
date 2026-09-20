import {test} from "@playwright/test"

test('auth file to skip the login', async ({page}) => {


await page.goto('https://login.salesforce.com/')

await page.locator('#username').fill('deepika03jayaprakash.877ab22a2546@agentforce.com')

await page.locator('#Login').click()

await page.locator('#password').fill('Harinikaa@26')

await page.locator('#Login').click()

await page.waitForTimeout(15000)

await page.context().storageState({path:'Data/sflogin.json'})
    
})