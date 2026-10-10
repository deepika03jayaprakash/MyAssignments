import { sfLogin } from "./sflogin"

export class SfHomePage extends sfLogin {

    async sfnavigateToLead() {

        await this.sfpage.locator('.slds-icon-waffle').click()
        await this.sfpage.locator('[aria-label="View All Applications"]').click()
        await this.sfpage.locator('[placeholder="Search apps or items..."]').fill('Leads')
        await this.sfpage.waitForLoadState("domcontentloaded")
        await this.sfpage.locator('[data-label="Leads"]').click() //Navigate to Lead
    }
}