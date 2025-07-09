import { expect } from "@playwright/test";

export class ProfileUpdate {
    constructor(page) {
        this.page = page;
        this.pficon = page.locator("//p[@class='text-info truncate text-ellipsis']")
        this.firstname = page.locator("input[name='firstName']")
        this.lastname = page.locator("input[name='lastName']")
        this.submit = page.locator("(//button[normalize-space()='Submit'])[1]")
        this.verified = page.locator("//p[@class='text-base truncate text-ellipsis']")
    }

    async prfIcon() {
        let firstName = "Yash";
        let lastName = "Paliwal";
        let fullName = firstName + " " + lastName;
        await this.pficon.click()
        await this.firstname.fill(firstName)
        await this.lastname.fill(lastName)
        await this.submit.click()
        let scr = await this.verified.textContent()

        expect(fullName.trim()).toBe(scr.trim());


    }
}