import { test } from "@playwright/test"
import { LoginPage } from "../../page/LoginPage"
import { DashboardPage } from "../../page/positionsCount";

test('Verifying total number of open position', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.Login('ram@yopmail.com', 'Ram1234@');
    await page.waitForTimeout(3000);
    const dashboard = new DashboardPage(page);

    await dashboard.checking();

})