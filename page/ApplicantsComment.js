import { expect } from "@playwright/test";
export class ApplicantsComment {

    constructor(page) {

        this.page = page;
        this.applicant = page.locator("//span[normalize-space()='Applicants']");
        this.status = page.locator("//table/tbody/tr[1]/td[3]/p")
        this.select=page.locator("//input[@value='Onboarded']")
        this.comment=page.locator("//textarea[@name='Comments']")
        this.btn=page.locator("(//button[normalize-space()='Update'])[1]")
        this.upcomment=page.locator("(//p[@class='truncate text-info'][normalize-space()='you are good'])[1]")
        

    }

    async verified() {
         
        let str="you are good"
        await this.applicant.click()
        await this.status.click()
        await this.select.click()
        await this.comment.fill(str)
        await this.btn.click()
        await this.page.waitForTimeout(6000)
        await this.status.click()
        await this.page.waitForTimeout(6000)
        let str2=await this.upcomment.first().textContent();
        
        expect(str2.trim()).toBe(str.trim());

    }

}