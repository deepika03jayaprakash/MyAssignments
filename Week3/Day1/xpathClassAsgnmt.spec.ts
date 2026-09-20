import {test} from "@playwright/test"

test('xpathAssignment', async ({page}) => {
     
    await page.goto('https://login.salesforce.com/')
    await page.locator('//div[@id="username_container"]/input[@name="username"]').fill('dilipkumar.rajendran@testleaf.com')//Parent to Child
    await page.keyboard.press('Enter')
    await page.locator('//div[@id="theloginform"]//input[@id="password"]').fill('TestLeaf@2025') //Grandparent to GrandChild
    await page.locator('//input[@id="password"]/following-sibling::input[@id="Login"]').click() //Elder sibling to Younger sibling
    
})
