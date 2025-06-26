export class LoginPage{
    constructor(page){
        this.page=page;
        this.txtUserName = "input[name='email']";
        this.txtPassword = "input[name='password']";
        this.btnSubmit = "button[type='submit']";
    }

    async gotoLoginPage(){
        await this.page.goto('https://fl-01-ymen-shared-ui-cin-test.azurewebsites.net/');
    }

    async Login(username,password){
         await this.page.locator(this.txtUserName).fill(username);
         await this.page.locator(this.txtPassword).fill(password);
         await this.page.locator(this.btnSubmit).click();
    }
}