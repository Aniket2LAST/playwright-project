import { expect } from "@playwright/test";

class PasswordUpdates {
    constructor(page) {
        this.page = page;
        this.pficon = page.locator("//p[@class='text-info truncate text-ellipsis']");
        this.oldpd = page.locator("//input[@name='oldPassword']");
        this.newpd = page.locator("//input[@name='newPassword']");
        this.warnmsg = page.locator("//p[text()='Use Different Password']");
        this.btn = page.locator("//button[text()='Change Password']"); 
    }

    async verified() {
        const oldpass = "Yash";
        const newpass = "Yash";
        
        await this.pficon.click();
        await this.page.waitForTimeout(7000);
        await this.oldpd.fill(oldpass);
        await this.newpd.fill(newpass);
        await this.btn.click();

        await expect(this.warnmsg).toBeVisible(); 
    }
}

export default PasswordUpdates;
