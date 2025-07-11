import { test } from "@playwright/test"
import { LoginPage } from "../../page/LoginPage"
import { DashboardPage } from "../../page/positionsCount";

test.describe('Regression suit',()=>{


test('Verifying total number of open position[Regression]', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('aniket@fleekitsolutions.com', 'Test@12345');
    await page.waitForTimeout(3000);
    const dashboard = new DashboardPage(page);

    await dashboard.checking();

})
});