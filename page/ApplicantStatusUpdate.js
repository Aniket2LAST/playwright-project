import { expect } from "@playwright/test";
export class Applicants {

    constructor(page) {

        this.page = page;
        this.applicant = page.locator("//a[@href='/company/candidates']");
        this.status = page.locator("//table/tbody/tr[1]/td[3]/p")
        this.update = page.locator("//input[@value='Under Review']")
        this.sunbtn = page.locator("(//button[normalize-space()='Update'])[1]")
        this.verifiedmsg = page.locator("//p[text()='Status updated successfully']")

    }

    async verified() {

        let scrmsg = "Status updated successfully";
        await this.applicant.click();
        await this.page.waitForTimeout(5000)
        await this.status.click();
        await this.update.click();
        await this.sunbtn.click();
        let msg = await this.verifiedmsg.textContent();
        expect(scrmsg.trim()).toBe(msg.trim());

    }

}