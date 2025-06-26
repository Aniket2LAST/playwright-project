export class Requirementsection {
    constructor(page) {
        this.page = page;
        this.req = "//span[text()='Requirements']";
        this.match = "(//div[contains(text(),'3 Matching Candidates')])[1]";
        this.search = "//input[@placeholder='Search Resources']";
        this.txtmsg = "//div[contains(text(),'Rohan Sharma')]";
        this.icon = "path[stroke='black']";
    }
    async verifysearch(txt) {
        await this.page.locator(this.req).click();
        await this.page.locator(this.match).click();
        await this.page.locator(this.search).fill(txt);
        const opt = await this.page.locator(this.txtmsg);
        const text = await opt.textContent();
        if (text?.trim() === 'Rohan Sharma') {
            console.log('Search bar is working')
        }
        else {
            console.log('Search bar is not working')
        }
        await this.page.locator(this.icon).click();
    }
}