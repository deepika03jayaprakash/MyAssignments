import { SfHomePage } from "./sfhome"

export class SfLeadPage extends SfHomePage {

    async sfCreateLead() {
        await this.sfpage.getByRole('button',{name:"New"}).click()
        await this.sfpage.locator('[name="salutation"]').click()
        await this.sfpage.locator('[data-value="Mrs."]').click()
        await this.sfpage.locator('[placeholder="Last Name"]').fill('JayaprakashLead')
        await this.sfpage.locator('[name="Company"]').fill('Infy')
        await this.sfpage.locator('[name="SaveEdit"]').click()


    }

    async sfVerifyLead() {
        let message = await this.sfpage.locator('.toastMessage').textContent()
        console.log(message);

    }
}
