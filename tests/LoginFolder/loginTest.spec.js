import test from "@playwright/test"
import { LoginPage } from "../../page/LoginPage";

test.only('test', async ({ page }) => {

    const login = new LoginPage(page);

    await login.gotoLoginPage();
    await login.Login('ram@yopmail.com', 'Ram1234@');
    await page.waitForTimeout(3000);


});