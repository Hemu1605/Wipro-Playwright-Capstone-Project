class RegisterPage {

    constructor(page) {

        this.page = page;

        this.registerLink = page.locator('.ico-register');

        this.firstName = page.locator('#FirstName');
        this.lastName = page.locator('#LastName');
        this.email = page.locator('#Email');

        this.password = page.locator('#Password');
        this.confirmPassword = page.locator('#ConfirmPassword');

        this.registerButton = page.locator('#register-button');

        this.successMessage = page.locator('.result');

        this.errorMessage = page.locator('.message-error');
    }

    async goto() {
        await this.page.goto('/');
    }

    async openRegisterPage() {
        await this.registerLink.click();
    }

    async registerUser(first, last, email, password) {

        await this.firstName.fill(first);

        await this.lastName.fill(last);

        await this.email.fill(email);

        await this.password.fill(password);

        await this.confirmPassword.fill(password);

        await this.registerButton.click();
    }
}

module.exports = { RegisterPage };