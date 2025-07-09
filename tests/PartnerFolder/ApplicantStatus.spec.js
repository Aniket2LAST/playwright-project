import { test, expect } from '@playwright/test';
import { LoginPage } from "../../page/LoginPage"
import { Applicants } from "../../page/ApplicantStatusUpdate";


test.only('ApplicantStatusTest', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.Login('ram@yopmail.com', 'Ram1234@');
    await page.waitForTimeout(3000);
    const app = new Applicants(page);
    await app.verified();
});