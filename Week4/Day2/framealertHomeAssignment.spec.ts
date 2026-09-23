import { expect, test } from "@playwright/test"

{
    test('frameAndalert_validation', async ({ page }) => {

        let action = 'accept' as 'accept' | 'dismiss'; // switch to 'dismiss' to test the other path

        page.on('dialog', async (notification) => { //Event Listener for alert handling

            let notificationtype = notification.type() //fetching the type of alert
            console.log(notificationtype); 

            let notificationmsg = notification.message() //fetching the alert message
            console.log(notificationmsg);

            if (action === 'accept') //If condition to check the accept and dismiss action and print the action
            {

                await notification.accept() //Accept the alert by clicking OK
                let afterbuttontxt = await fr.locator('[id="demo"]').textContent() //Fetching the text confirmation message after clicking OK
                console.log(afterbuttontxt) //Printing the message in console
                expect(afterbuttontxt).toBe("You pressed OK!") //Assertion to check the exact text
            } else {
                await notification.dismiss() //Dismiss the alert by clicking Cancel
                let afterbuttontxt = await fr.locator('[id="demo"]').textContent() //Fetching the text confirmation message after clicking Cancel
                console.log(afterbuttontxt) //Printing the message in console
                expect(afterbuttontxt).toBe("You pressed Cancel!") //Assertion to check the exact text
            }

        })

        await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm') //Launching url

        let fr = page.frameLocator('[id="iframeResult"]')  //Frame locator saved in one variable

        await fr.getByRole('button', { name: "Try it" }).click() //Fetching button locator using frame locator variable and taking click action


    })
}


// const expectedText = action === 'accept' ? "You pressed OK!" : "You pressed Cancel!";  Ternary conditional operator also can be used here.