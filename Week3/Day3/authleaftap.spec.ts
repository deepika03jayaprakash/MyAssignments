import {test} from "@playwright/test"

test('auth file to skip the login', async ({page}) => {


await page.goto('https://leaftaps.com/opentaps/control/main')

await page.locator('#username').fill('democsr')

await page.locator('#password').fill('crmsfa')

await page.locator('.decorativeSubmit').click()

await page.waitForTimeout(15000)

await page.context().storageState({path:'Data/ltlogin.json'}) //Store the cred details/cache under Data - ltlogin.json file
    
})

