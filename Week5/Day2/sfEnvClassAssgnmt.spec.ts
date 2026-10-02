import { test } from "@playwright/test"
import dotenv from "dotenv"
dotenv.config({ path: 'Utils/qa.env' })

console.log(process.env.sf_url);
console.log(process.env.sf_username)
console.log(process.env.sf_password)

let URL = process.env.sf_url as string
let Username = process.env.sf_username as string
let Password = process.env.sf_password as string

test('reading Env file', async ({ page }) => {
    await page.goto(URL)

    await page.locator('#username').fill(Username)

    await page.locator('#Login').click()

    await page.locator("#password").fill(Password)

    await page.locator('#Login').click()
})