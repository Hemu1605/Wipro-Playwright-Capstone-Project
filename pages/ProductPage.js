class ProductPage {

    constructor(page) {

        this.page = page;

        this.firstProduct = page.locator('.product-item').first();

        this.productImage = page.locator('#main-product-img-72');

        this.productPrice = page.locator('.product-price');

        this.quantityInput = page.locator('.qty-input');

        this.addToCartButton = page.locator('.add-to-cart-button');

        this.descriptionSection = page.locator('.full-description');

        this.stockAvailability = page.locator('.stock');

        this.reviewSection = page.locator('.product-review-links');

        this.addToWishlistButton = page.locator(
          'input[value="Add to wishlist"]'
        ).first();

        this.successBar = page.locator('#bar-notification');

        this.breadcrumb = page.locator('.breadcrumb');
    }

    async goto() {

        await this.page.goto('/');
    }

    async openFirstProduct() {

        await this.firstProduct.click();
    }

    async openProductDirectly() {

    await this.page.goto(
        'https://demowebshop.tricentis.com/build-your-cheap-own-computer'
    );
    }
}

module.exports = { ProductPage };