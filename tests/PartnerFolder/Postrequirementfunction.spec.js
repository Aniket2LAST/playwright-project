import test from "@playwright/test"
import { LoginPage } from "../../page/LoginPage";
import { Requirementpost } from "../../page/Requirementspecificvendor";

test('test', async ({ page }) => {

    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.Login('ram@yopmail.com', 'Ram1234@');
    await page.waitForTimeout(3000);

    const req = new Requirementpost(page);
    await req.verifyrequest('oracle engineer');
    await login.Login('anshpaliwal.900@gmail.com', 'Ansh123@');
    await req.verifytxt();
})