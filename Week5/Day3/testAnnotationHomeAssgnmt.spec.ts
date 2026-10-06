import { test, expect } from "@playwright/test"


test.describe('Salesforce Annotation',{tag:'@salesforceflow'
    
},()=>{

test.use({
    storageState: 'Data/sflogin.json'  //Week3Day3 authsf.spec.ts run first to store the storage state
})

test('salesforce slow annotationtest',async({page})=>{
    test.slow() //Slow annotation need to be mentioned inside the test

await page.goto("https://orgfarm-36fba2afa5-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome")

await page.waitForLoadState('domcontentloaded')

let title = await page.title()
console.log(title)
})

test.fail('salesforce fail annotationtest',async ({page}) => {
await page.goto("https://orgfarm-36fba2afa5-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome")
await page.locator('.slds-icon').click(); //Click on App launcher icon
//it should fail here for wrong locator and test case should be passed
    
})
})  //npx playwright test --grep "@salesforceflow"  to run the salesforce group alone in console

test.describe('leaftap Annotations',{tag:'@leaftapflow'},()=>{

test('leaftap login', async ({ page }) => {
    await page.goto('https://leaftaps.com/opentaps/control/main')
    await page.getByRole('textbox', { name: 'Username' }).fill('Demosalesmanager');
    await page.getByRole('textbox', { name: 'Password' }).fill('crmsfa');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForLoadState("domcontentloaded")
    await expect(page.getByRole('link', { name: 'CRM/SFA' })).toBeVisible();
})

test.fail('leaftap invalid login',async ({page}) => {
 page.goto('https://leaftaps.com/opentaps/control/main')
    await page.getByRole('textbox', { name: 'Username' }).fill('Demosalesmanager');
    await page.getByRole('textbox', { name: 'Password' }).fill('crmsfa123'); //Wrong password to make invalid
    await page.getByRole('button', { name: 'Login' }).click();

    //This test should be passed. bcoz here we are expecting test flow to be failed.
    
})
 test.fixme('leaftap Incomplete flow',async({page})=>{
    page.goto('https://leaftaps.com/opentaps/control/main')
    await page.getByRole('textbox', { name: 'Username' }).fill('Demosalesmanager');
    await page.getByRole('textbox', { name: 'Password' }).fill('crmsfa');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByRole('link', { name: 'CRM/SFA' })).toBeVisible();
    let crmsfa = page.getByRole('link', { name: 'CRM/SFA' })
    //CRM/SFA should be clicked. but not adding that step for incomplete flow 
    //This test should be skipped as we are using fix me annotation
    
 })

 test.skip('leaftap Optional testcase',async({page})=>{

    console.log("This test should be skipped as we are using skip annotation")
 })

})

// test.only('Testing only annotation',async()=>{
//     console.log("Testing 'only' annotation test ran successfully by skipping all other test cases ")
// })
