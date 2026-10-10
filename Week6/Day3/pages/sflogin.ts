import { Page } from "@playwright/test"

export class sfLogin {

    sfpage: Page
    constructor(tpage: Page) {

        this.sfpage = tpage

    }

    async sfloadUrl(url: string) {

        await this.sfpage.goto(url)

    }


    async sfloginCredentials(username: string, password: string) {

        await this.sfpage.locator('#username').fill(username)

        await this.sfpage.locator('#Login').click()

        await this.sfpage.locator('#password').fill(password)

        await this.sfpage.locator('#Login').click()
        
        await this.sfpage.waitForTimeout(15000)

    }

}