export class LoginPage
{
    constructor(page)
    {
     this.page=page;
     this.emailtf=page.locator('input[type="email"]')
     this.passwdtf=page.locator('input[type="password"]')
     this.loginbtn=page.locator('button[type="submit"]')
    }  
 
 
async goto()
  {
    await this.page.goto("https://fl-01-ymen-shared-ui-cin-test.azurewebsites.net/login");
  }
 
 
 
async login(email,password)
  {
    await this.emailtf.fill(email);
    await this.passwdtf.fill(password);
    await this.loginbtn.click();
  }
 
 
}