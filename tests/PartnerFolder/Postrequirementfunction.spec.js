import test from "@playwright/test"
import { LoginPage } from "../../page/LoginPage";
import { Requirementpost } from "../../page/Requirementspecificvendor";

test.describe("Regression suite",()=>{


test('test[Regression]', async ({ page }) => {

    const login = new LoginPage(page);
    await login.goto();
    await login.login('ram@yopmail.com', 'Ram12345@');
    await page.waitForTimeout(3000);

    const req = new Requirementpost(page);
    await req.verifyrequest('oracle engineer');
    await login.login('anshpaliwal.900@gmail.com', 'Ansh123@');
    await req.verifytxt();
})
});