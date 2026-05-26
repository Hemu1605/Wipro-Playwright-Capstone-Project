class ProfilePage {

    constructor(page) {

        this.page = page;

        this.loginLink = page.locator('.ico-login');

        this.emailInput = page.locator('#Email');

        this.passwordInput = page.locator('#Password');

        this.loginButton = page.locator(
            'input[value="Log in"]'
        );

        this.accountLink = page.locator('.account').first();

        this.myAccountLink = page.locator('.account');

        this.ordersLink = page.locator(
            'a[href="/customer/orders"]'
        );

        this.logoutLink = page.locator('.ico-logout');

        this.pageTitle = page.locator('.page-title');

        this.bodyContent = page.locator('body');
    }

    async gotoLoginPage() {

        await this.page.goto(
            'https://demowebshop.tricentis.com/login'
        );
    }

    async login(email, password) {

        await this.emailInput.fill(email);

        await this.passwordInput.fill(password);

        await this.loginButton.click();
    }
}

module.exports = { ProfilePage };