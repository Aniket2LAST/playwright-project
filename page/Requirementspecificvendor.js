import { expect } from '@playwright/test';

export class Requirementpost {
    constructor(page) {
        this.page = page;
        this.reqbtn = "//button[normalize-space()='Post a requirement']";
        this.txtarea = "textarea[name='promptJson']";
        this.nbtn = "//button[normalize-space()='Next']";
        this.radiobtn = "//input[@value='2']";
        this.dropdown = "input[placeholder='Search']";
        this.dropoption = "li[role='option']:has-text('Fleeksam')";
        this.submitbtn = "//button[normalize-space()='Submit']";
        this.reqsect = "//span[text()='Requirements']";
        this.text = page.getByText('oracle engineer');
        this.logoutbtn = "//div[text()='Logout']";
    }

    async verifyrequest(txt) {
        await this.page.locator(this.reqbtn).click();
        await this.page.locator(this.txtarea).fill(txt);
        await this.page.locator(this.nbtn).click();
        await this.page.locator(this.radiobtn).click();
        await this.page.locator(this.nbtn).click();
        const searchInput = this.page.locator(this.dropdown);
        await searchInput.click();
        await searchInput.fill('Fleeksam');
        await expect(searchInput).toHaveAttribute('aria-expanded', 'true');
        const option = this.page.locator(this.dropoption);
        await option.waitFor({ state: 'visible' });
        await option.click();
        await this.page.locator(this.submitbtn).click();
        await this.page.locator(this.logoutbtn).click();
    }
    async verifytxt() {
        await this.page.locator(this.reqsect).click();
        await expect(this.text).toBeVisible();
    }

}