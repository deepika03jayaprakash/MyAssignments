import { test } from "@playwright/test"

import data from "../../../Utils/saleslogin.json"

// test('jsonCredSf', async ({ page }) => { //when we have one set of data

// await page.goto('https://login.salesforce.com/')

// await page.locator('#username').fill(data.username)

// await page.locator('#Login').click()

// await page.locator('#password').fill(data.password)

// await page.locator('#Login').click()
// })

for (let credentials of data) {

    test(`learn to read data from JSON file ${credentials.tcid}`, async ({ page }) => { //When we are using an array of json

        await page.goto('https://login.salesforce.com/')

        await page.locator('#username').fill(credentials.username)

        await page.locator('#Login').click()

        await page.locator('#password').fill(credentials.password)

        await page.locator('#Login').click()


    })
}
