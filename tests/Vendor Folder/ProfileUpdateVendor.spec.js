import { test, expect } from '@playwright/test'
import { LoginPage } from "../../page/LoginPage";
import { ProfileUpdate } from "../../page/ProfileVEndorUpdate";


test('UpdatePrf', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.Login('anshpaliwal.900@gmail.com', 'Ansh123@');
    await page.waitForTimeout(3000);
    const pu = new ProfileUpdate(page);
    await pu.prfIcon();


});