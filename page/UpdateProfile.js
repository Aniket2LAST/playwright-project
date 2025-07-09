import { expect } from "@playwright/test";

export class ProfileUpdate {
    constructor(page) {
        this.page = page;
        this.pficon = page.locator("//p[@class='text-info truncate text-ellipsis']");
        this.firstname = page.locator("input[name='firstName']");
        this.lastname = page.locator("input[name='lastName']");
        this.submit = page.locator("(//button[normalize-space()='Submit'])[1]");
        this.verified = page.locator("//p[@class='text-base truncate text-ellipsis']");
    }
    async prfIcon() {
        const firstName = "Ram";
        const lastName = "kumar";
        const fullName = `${firstName} ${lastName}`;

        await this.pficon.click();
        await this.firstname.fill(firstName);

        await this.lastname.click();
        await this.lastname.fill('');
        await this.page.keyboard.type(lastName); // simulate real typing

        await this.submit.click();

        // ✅ Instead of waiting for toast, directly wait for updated profile text
        await expect(this.verified).toHaveText(fullName, { timeout: 10000 });
    }


}