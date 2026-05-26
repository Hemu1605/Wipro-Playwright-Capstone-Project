class CheckoutPage {

    constructor(page) {

        this.page = page;

        this.successBar = page.locator('#bar-notification');

        this.processorSlow = page.locator(
            '#product_attribute_75_5_31_96'
        );

        this.addToCartButton = page.locator(
            '#add-to-cart-button-75'
        );

        this.successBar = page.locator('#bar-notification');

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

        this.billingContinueButton = page.locator(
            'input.button-1.new-address-next-step-button'
        );

        this.shippingContinueButton = page.locator(
            'input.button-1.shipping-method-next-step-button'
        );

        this.paymentMethodContinueButton = page.locator(
            'input.button-1.payment-method-next-step-button'
        );

        this.paymentInfoContinueButton = page.locator(
            'input.button-1.payment-info-next-step-button'
        );

        this.confirmOrderButton = page.locator(
            'input.button-1.confirm-order-next-step-button'
        );

        this.orderSuccessMessage = page.locator(
            '.title'
        );

        this.countryDropdown = page.locator(
            '#BillingNewAddress_CountryId'
        );

        this.cityInput = page.locator(
            '#BillingNewAddress_City'
        );

        this.addressInput = page.locator(
            '#BillingNewAddress_Address1'
        );

        this.zipInput = page.locator(
            '#BillingNewAddress_ZipPostalCode'
        );

        this.phoneInput = page.locator(
            '#BillingNewAddress_PhoneNumber'
        );
    }

    async gotoProductPage() {

        await this.page.goto(
            'https://demowebshop.tricentis.com/simple-computer'
        );
    }

    async addProductForCheckout() {

        await this.processorSlow.check();

        await this.addToCartButton.click();
    }

    async openCart() {

        await this.shoppingCartLink.click();
    }

    async proceedToCheckout() {

        await this.termsCheckbox.check();

        await this.checkoutButton.click();
    }
}

module.exports = { CheckoutPage };