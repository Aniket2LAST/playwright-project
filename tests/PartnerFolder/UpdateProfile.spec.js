import { test, expect } from '@playwright/test'
import { LoginPage } from "../../page/LoginPage";
import { ProfileUpdate } from "../../page/UpdateProfile";


test('UpdatePrf', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.Login('ram@yopmail.com', 'Ram1234@');
    await page.waitForTimeout(3000);
    const pu = new ProfileUpdate(page);
    await pu.prfIcon();


});