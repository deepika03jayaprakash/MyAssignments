import { test } from "@playwright/test"
{
    test('promptAlertChecking', async ({ page }) => {


        //Using Event listener to handle the alert
        page.on('dialog', async (alert) => {

            let alertType = alert.type() //Saving the type of alert in alerttype variable
            console.log(alertType);

            let alertMessage = alert.message() //Saving the alert message in alertMessage variable
            console.log(alertMessage);

            if (alertType === "prompt") { //Using if condition to check the prompt type

                await alert.accept("Playwright")
                let promptoutput = await page.locator('[id="confirm_result"]').textContent();
                console.log(promptoutput)

            }

        })
        
        await page.goto('https://www.leafground.com/alert.xhtml')
        
        //prompt-ok, cancel and input text box
        await page.locator('//span[text()="Show"]').nth(4).click()


    })
}