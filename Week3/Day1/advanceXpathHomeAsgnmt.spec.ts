import {expect, test} from "@playwright/test"

test ('advanceXpathAssignment', async ({page}) => {

    //Part1
    await page.goto('https://leafground.com/input.xhtml') // Navigate to Page leaf ground
    //Part2
    let disabletxt = page.locator('//div[@class="col-12"]/input[@placeholder="Disabled"]') //Parent to Child Xpath
    await expect(disabletxt).toBeDisabled() //Validating disabletxt is disabled txt or not by using assertion
    //Part3
    let enabletxt=page.locator('//div[@class="col-12"]/input[@placeholder="Babu Manickam"]') // Parent to Child  xpath
    await expect (enabletxt).toBeEnabled() //Validating the text is enabled or not by using Enabled assertion
    await expect (enabletxt).toBeEditable() //Validating the text is editable or not by using Editable assertion
    await enabletxt.fill('Deepika') // Entering the enable txt field with Name
    //Part4
    let softassertion=page.locator('//div[@class="grid formgrid"]//input[@placeholder="Your email and tab"]') //Grandparent to Child Xpath
    await expect.soft (softassertion).toBeDisabled() //Using soft assertion 
    //Part5
    await page.locator('//div[@class="grid formgrid"]//input[@value="My learning is superb so far."]').fill('Playwright Learning')   //Grandparent to Child Xpath
}

)
