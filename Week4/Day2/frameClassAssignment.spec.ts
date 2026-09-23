import {test} from "@playwright/test"

{

    test('frameHandling',async ({page}) => {

       await page.goto('https://www.leafground.com/frame.xhtml')

        let outerframe=page.frameLocator('[src="page.xhtml"]')  //Outer frame locator saving into the variable

        let innerframe =outerframe.frameLocator('[src="framebutton.xhtml"]') //Inner frame locator - fetching the locator using outerframe

        let innerbutton= innerframe.locator('#Click') //InnerButton - Fetching the locator using innerframe

        await innerbutton.click() //Clicking the button inside the Nested frame

        let text = await innerbutton.textContent() //Fetching the text message after click
        console.log(text) //Printing the txt message
        
    })
}