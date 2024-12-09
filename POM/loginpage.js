export class LoginPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
      this.page = page;
      this.userNameInput = page.locator('[id="username"]');
      this.passwordInput = page.locator('[id="password"]');
      this.submitButton = page.locator('[type="submit"]');
    }
  
    async login(email, password) {
      await this.userNameInput.fill(email);
      await this.passwordInput.fill(password);
      await this.submitButton.click();
    }
  
    async visitLoginPage() {
      await this.page.goto('/');
    }
  
    }
  export default LoginPage;
  