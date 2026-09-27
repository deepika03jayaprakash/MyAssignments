import { test } from "@playwright/test"

test('windowHandling', async ({ page, context }) => {

    await page.goto('https://www.leafground.com/window.xhtml')
    //EventListener
    let pagePromise = context.waitForEvent('page')

    await page.locator('(//span[@class="ui-button-text ui-c"])[1]').click()

    let childPage = await pagePromise
    await childPage.waitForLoadState('domcontentloaded')

    let childTitle = await childPage.title()
    console.log("Child Page Title is ",childTitle);
    let pageTitle = await page.title()
    console.log("Main Page Title is ",pageTitle);

    await page.bringToFront()


})