class CartPage {

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

        this.cartTable = page.locator('.order-summary-content');

        this.quantityInput = page.locator('.qty-input');

        this.updateCartButton = page.locator(
            'input[name="updatecart"]'
        );

        this.removeCheckbox = page.locator(
            'input[name="removefromcart"]'
        );

        this.emptyCartMessage = page.locator(
            '.order-summary-content'
        );

        this.productPrice = page.locator(
            '.product-unit-price'
        );

        this.subtotal = page.locator(
            '.product-subtotal'
        );

        this.continueShoppingButton = page.locator(
            'input[value="Continue shopping"]'
        );
    }

    async gotoProductPage() {

        await this.page.goto(
            'https://demowebshop.tricentis.com/simple-computer'
        );
    }

    async selectProcessor() {

        await this.processorSlow.check();
    }

    async addProductToCart() {

        await this.addToCartButton.click();
    }

    async openCart() {

        await this.shoppingCartLink.click();
    }
}

module.exports = { CartPage };