 import { expect } from '@playwright/test';

export class Vendor {
    constructor(page) {
        this.page = page;
        this.bench = "//span[text()='Bench']";
        this.matchingpositions = "(//div[normalize-space()='15 Matching positions'])[1]";
        this.searchbar = "//input[@placeholder='Search' and @type='text']";
        this.icon = "path[stroke='black']";
        this.txtmsg = "//div[contains(text(), 'Java Developer')]";
    }
    async verifymatchingpstnsearchbar(txt) {
        await this.page.locator(this.bench).click();
        await this.page.locator(this.matchingpositions).click();
        // await this.page.waitForLocator(2000);
        await this.page.locator(this.searchbar).fill(txt);
        const opt = await this.page.locator(this.txtmsg);
        const text = await opt.textContent();
        if (text === 'Java Developer') {
            console.log('Java developer exist');
        }
        else {
            console.log('Does not exist');
        }
        await this.page.locator(this.icon).click();
    }
}

//module.exports = { class  name };