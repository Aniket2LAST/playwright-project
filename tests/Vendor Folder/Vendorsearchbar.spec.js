import { LoginPage } from "../../page/LoginPage";
import { Vendor } from "../../page/Vendormatchingpositionssearchbar";
import test from "@playwright/test"
test('test', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.Login('anshpaliwal.900@gmail.com', 'Ansh123@');
    await page.waitForTimeout(3000);

    const ven = new Vendor(page);
    await ven.verifymatchingpstnsearchbar('Java Developer');

})