import { LoginPage } from "../../page/LoginPage";
import { Requirementsection } from "../../page/Requirementsearch";
import test from "@playwright/test"

test.only('test', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.Login('anshpaliwal.900@gmail.com', 'Ansh123@');
    await page.waitForTimeout(3000);

    const req = new Requirementsection(page);
    await req.verifysearch('Rohan Sharma');
})