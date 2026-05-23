class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginLink = page.locator('.ico-login');
    this.emailInput = page.locator('#Email');
    this.passwordInput = page.locator('#Password');
    this.rememberMe = page.locator('#RememberMe');
    this.loginButton = page.locator('input[value="Log in"]');
    this.logoutLink = page.locator('.ico-logout');
    this.errorMessage = page.locator('.validation-summary-errors');
  }

  async goto() {
    await this.page.goto('/');
  }

  async openLoginPage() {
    await this.loginLink.click();
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async loginWithRememberMe(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.rememberMe.check();
    await this.loginButton.click();
  }

  async logout() {

    await this.logoutLink.waitFor({
        state: 'visible'
    });

    await this.logoutLink.click();
}
}

module.exports = { LoginPage };