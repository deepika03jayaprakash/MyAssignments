import {expect, test} from "@playwright/test"


test.use(
    {
       storageState:'Data/sflogin.json' 
    }
)

test('auth file to skip the login', async ({page}) => {

// await page.goto("https://login.salesforce.com/")
await page.goto("https://orgfarm-36fba2afa5-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome")
await page.waitForTimeout (5000);

await page.waitForLoadState('domcontentloaded')

let title = await page.title()
console.log(title)


})