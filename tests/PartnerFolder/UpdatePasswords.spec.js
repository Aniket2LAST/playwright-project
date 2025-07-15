import { test, expect } from '@playwright/test';
import { LoginPage } from "../../page/LoginPage";
import PasswordUpdates from "../../page/PasswordUpdates"; // ✅ FIXED

test('UpdatePasswordTest', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.Login('aniket@fleekitsolutions.com', 'Test@12345');
    await page.waitForTimeout(3000);

    const app = new PasswordUpdates(page); 
    await app.verified();
});
