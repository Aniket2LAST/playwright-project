import { test, expect } from '@playwright/test';
import { LoginPage } from "../../page/LoginPage";
import { Applicants } from "../../page/ApplicantStatusUpdate";

test.describe('Sanity Suite', () => {
  test.only('ApplicantStatusTest[sanity]', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('aniket@fleekitsolutions.com', 'Test@12345');

    const app = new Applicants(page);
    await app.verified();
  });
});
