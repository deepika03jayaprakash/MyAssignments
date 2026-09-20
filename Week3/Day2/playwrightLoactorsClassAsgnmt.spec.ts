import {test} from "@playwright/test"
test ("playwrightLocators.spec.ts", async ({page}) => {

    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.getByRole('textbox',{name:"Username"}).fill('democsr2') //Using getByRole Playwright Locator with textbox role to fill the user name 
    await page.getByLabel('Password').fill('crmsfa') //Using getByLabel Playwright Locator with Text Label to fill the Password
    await page.getByRole('button',{name:"Login"}).click() //Using getByRole Playwright Locator with button role for login
    await page.getByText('CRM/SFA').click() // Using getByText Playwright Locator to click the text
    timeout:5000
    await page.getByRole('link',{name:"Leads"}).click() //Using getByRole Playwright Locator with Link role to click the lead link tap
    
})