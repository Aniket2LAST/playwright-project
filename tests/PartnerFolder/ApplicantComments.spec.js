import { test, expect } from '@playwright/test';
import { LoginPage } from "../../page/LoginPage"
import { ApplicantsComment } from "../../page/ApplicantsComment";

test.describe('Sanity Suite',() => {
    test('ApplicantCommentsTest[sanity]', async ({ page }) => {
       const login = new LoginPage(page);
       await login.goto();
       await login.login('aniket@fleekitsolutions.com', 'Test@12345');
       await page.waitForTimeout(3000);
       const app = new ApplicantsComment(page);
       await app.verified();
       await login.goto();
    });
});
