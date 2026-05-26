class PaymentPage {

    constructor(page) {

        this.page = page;

        this.processorSlow = page.locator(
            '#product_attribute_75_5_31_96'
        );

        this.addToCartButton = page.locator(
            '#add-to-cart-button-75'
        );

        this.successBar = page.locator(
            '#bar-notification'
        );

        this.shoppingCartLink = page.locator(
            '.ico-cart'
        ).first();

        this.termsCheckbox = page.locator(
            '#termsofservice'
        );

        this.checkoutButton = page.locator(
            '#checkout'
        );

        this.checkoutAsGuestButton = page.locator(
            '.checkout-as-guest-button'
        );

        this.paymentMethodSection = page.locator(
            '#opc-payment_method'
        );

        this.paymentInfoSection = page.locator(
            '#opc-payment_info'
        );

        this.confirmOrderSection = page.locator(
            '#opc-confirm_order'
        );

        this.continueButtons = page.locator(
            'input.button-1'
        );
    }

    async gotoProductPage() {

        await this.page.goto(
            'https://demowebshop.tricentis.com/simple-computer'
        );
    }

    async addProductForPayment() {

        await this.processorSlow.check();

        await this.addToCartButton.click();
    }

    async openCart() {

        await this.shoppingCartLink.click();
    }

    async proceedCheckout() {

        await this.termsCheckbox.check();

        await this.checkoutButton.click();
    }
}

module.exports = { PaymentPage };