import test from "@playwright/test"
import { LoginPage } from "../../page/LoginPage";

test('test', async ({ page }) => {

    const login = new LoginPage(page);

    await login.gotoLoginPage();
    await login.Login('samm@yopmail.com', 'Ram1234@');
    await page.waitForTimeout(3000);


});