class WishlistPage {

    constructor(page) {

        this.page = page;

        this.wishlistLink = page.locator(
            '.ico-wishlist'
        ).first();

        this.bodyContent = page.locator('body');

        this.pageTitle = page.locator('.page-title');

        this.header = page.locator('.header');

        this.footer = page.locator('.footer');

        this.continueShoppingButton = page.locator(
            'input[value="Continue shopping"]'
        );
    }

    async gotoHomePage() {

        await this.page.goto(
            'https://demowebshop.tricentis.com'
        );
    }

    async openWishlist() {

        await this.wishlistLink.click();
    }
}

module.exports = { WishlistPage };